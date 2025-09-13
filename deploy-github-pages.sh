#!/bin/bash

# GitHub Pages Deployment Script for Lynx Project
# Always deploys to: git@github.com:ByteAIGC/Lynx.git

set -e  # Exit on any error

# Configuration
BUILD_DIR="build"
BRANCH="gh-pages"
REPO_URL="git@github.com:ByteAIGC/Lynx.git"
REPO_NAME="Lynx"
COMMIT_MESSAGE="Deploy to GitHub Pages - $(date '+%Y-%m-%d %H:%M:%S')"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

log_info()    { echo -e "${BLUE}ℹ️  $1${NC}"; }
log_success() { echo -e "${GREEN}✅ $1${NC}"; }
log_warning() { echo -e "${YELLOW}⚠️  $1${NC}"; }
log_error()   { echo -e "${RED}❌ $1${NC}"; }

log_info "Starting GitHub Pages deployment for $REPO_NAME"

# Step 1: Clean up any existing .DS_Store files
log_info "Cleaning up .DS_Store files..."
find . -name ".DS_Store" -type f -delete 2>/dev/null || true

# Step 2: Install dependencies (if needed)
if [ ! -d "node_modules" ]; then
    log_info "Installing dependencies..."
    npm install
fi

# Step 3: Build the project
log_info "Building the project..."
npm run build

if [ ! -d "$BUILD_DIR" ]; then
    log_error "Build failed! $BUILD_DIR directory not found."
    exit 1
fi
log_success "Build completed successfully!"

# Step 4: Ensure git repository is initialized & correct remote
if [ ! -d ".git" ]; then
    log_info "Initializing git repository..."
    git init
fi

# Always reset remote to correct GitHub repo
git remote remove origin 2>/dev/null || true
git remote add origin "$REPO_URL"

# Step 5: Commit current changes to main branch
log_info "Committing current changes to main branch..."
git checkout main 2>/dev/null || git checkout -b main
git add .
if git diff --staged --quiet; then
    log_warning "No changes to commit on main branch"
else
    git commit -m "Update source files before deployment" || log_warning "Nothing to commit"
fi

# Step 6: Prepare deployment
log_info "Preparing deployment to $BRANCH branch..."
if git show-ref --verify --quiet refs/heads/$BRANCH; then
    git checkout $BRANCH
else
    git checkout --orphan $BRANCH
    git rm -rf . 2>/dev/null || true
fi

# Step 7: Copy build files
log_info "Copying build files..."
cp -r $BUILD_DIR/* . 2>/dev/null || {
    log_error "Failed to copy build files."
    exit 1
}

# Step 8: Commit & push to gh-pages
log_info "Committing deployment files..."
git add .
if git diff --staged --quiet; then
    log_warning "No changes to deploy"
else
    git commit -m "$COMMIT_MESSAGE"
    log_info "Pushing to $BRANCH branch..."
    git push origin $BRANCH --force
    log_success "Deployment completed successfully!"
    echo "🌍 Your site should be available at:"
    echo "https://byteaigc.github.io/Lynx/"
    log_warning "Note: It may take a few minutes for GitHub Pages to update."
fi

# Step 9: Switch back to main branch
log_info "Switching back to main branch..."
git checkout main 2>/dev/null || git checkout master 2>/dev/null || {
    log_warning "Could not switch back to main/master branch"
}

log_success "Deployment script completed!"
