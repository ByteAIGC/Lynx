#!/bin/bash

# GitHub Pages Deployment Script for Lynx Website
# Usage: ./deploy-github-pages.sh [repository-url]
# Default repo: git@github.com:ByteAIGC/Lynx.git

set -e  # Exit on any error

echo "🚀 Starting GitHub Pages deployment for Lynx website..."

# Configuration
DEFAULT_REPO_URL="git@github.com:ByteAIGC/Lynx.git"
REPO_URL="${1:-$DEFAULT_REPO_URL}"
BUILD_DIR="build"
DEPLOY_BRANCH="gh-pages"
COMMIT_MESSAGE="Deploy to GitHub Pages - $(date)"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

print_status()  { echo -e "${BLUE}ℹ️  $1${NC}"; }
print_success() { echo -e "${GREEN}✅ $1${NC}"; }
print_warning() { echo -e "${YELLOW}⚠️  $1${NC}"; }
print_error()   { echo -e "${RED}❌ $1${NC}"; }

# Ensure we are in a git repo
if [ ! -d ".git" ]; then
  print_status "Initializing git repository..."
  git init
  print_success "Git repository initialized"
fi

# Ensure remote 'origin' points to the desired repo
if git remote get-url origin >/dev/null 2>&1; then
  CURRENT_URL=$(git remote get-url origin)
  if [ "$CURRENT_URL" != "$REPO_URL" ]; then
    print_status "Updating remote origin to $REPO_URL (was $CURRENT_URL)..."
    git remote set-url origin "$REPO_URL"
    print_success "Remote origin updated"
  else
    print_status "Remote origin already set to $REPO_URL"
  fi
else
  print_status "Adding remote origin $REPO_URL..."
  git remote add origin "$REPO_URL"
  print_success "Remote origin added"
fi

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
  print_status "Installing dependencies..."
  npm install
  print_success "Dependencies installed"
fi

# Build
print_status "Building the project..."
npm run build

if [ ! -d "$BUILD_DIR" ]; then
  print_error "Build failed! $BUILD_DIR directory not found."
  exit 1
fi
print_success "Project built successfully"

# Prepare deployment (use temp dir)
print_status "Preparing deployment branch..."
TEMP_DIR=$(mktemp -d)
cp -R "$BUILD_DIR"/* "$TEMP_DIR/"

# Switch/create gh-pages
if git show-ref --verify --quiet refs/heads/$DEPLOY_BRANCH; then
  print_status "Switching to existing $DEPLOY_BRANCH branch..."
  git checkout $DEPLOY_BRANCH
else
  print_status "Creating new $DEPLOY_BRANCH branch..."
  git checkout --orphan $DEPLOY_BRANCH
  git rm -rf . || true
fi

# Copy built files into branch
print_status "Copying built files..."
cp -R "$TEMP_DIR"/* ./
rm -rf "$TEMP_DIR"

# Ensure GitHub Pages doesn’t run Jekyll
: > .nojekyll

# (Optional SPA routing) uncomment if needed:
# [ -f index.html ] && cp index.html 404.html

print_success "Files prepared for deployment"

# Commit & push
print_status "Committing changes..."
git add .
git commit -m "$COMMIT_MESSAGE" || print_warning "No changes to commit"

print_status "Pushing to GitHub Pages..."
git push origin $DEPLOY_BRANCH --force

print_success "Deployment completed!"

# Switch back to main/master
print_status "Switching back to main branch..."
git checkout main 2>/dev/null || git checkout master 2>/dev/null || \
  print_warning "Could not switch back to main/master branch"

# Output URL
echo ""
print_success "🎉 Website deployed successfully!"
echo ""
echo "Your website will be available at:"
# Hardcode the public URL since we know the repo:
echo "https://byteaigc.github.io/Lynx/"
echo ""
print_warning "Note: It may take a few minutes for GitHub Pages to update."
echo ""
echo "To enable GitHub Pages (if not done):"
echo "1. Repo → Settings → Pages"
echo "2. Source: Deploy from a branch"
echo "3. Branch: gh-pages / (root)"
echo "4. Save"
