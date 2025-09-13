#!/bin/bash
set -euo pipefail

echo "🚀 Deploying Lynx to GitHub Pages…"

# ---------------- Config ----------------
DEFAULT_REPO_URL="git@github.com:ByteAIGC/Lynx.git"
REPO_URL="${1:-$DEFAULT_REPO_URL}"
PUBLISH_BRANCH="gh-pages"
PUBLISH_DIR=".gh-pages"    # worktree folder
COMMIT_MESSAGE="Deploy to GitHub Pages - $(date)"
# ----------------------------------------

# Colors
BLUE='\033[0;34m'; GREEN='\033[0;32m'; YELLOW='\033[1;33m'; RED='\033[0;31m'; NC='\033[0m'
log()   { echo -e "${BLUE}ℹ️  $1${NC}"; }
ok()    { echo -e "${GREEN}✅ $1${NC}"; }
warn()  { echo -e "${YELLOW}⚠️  $1${NC}"; }
fail()  { echo -e "${RED}❌ $1${NC}"; }

# Ensure git repo & remote
if [ ! -d ".git" ]; then
  log "Initializing git…"
  git init
fi

if git remote get-url origin >/dev/null 2>&1; then
  CUR=$(git remote get-url origin)
  if [ "$CUR" != "$REPO_URL" ]; then
    log "Updating origin to $REPO_URL (was $CUR)…"
    git remote set-url origin "$REPO_URL"
  fi
else
  log "Setting origin to $REPO_URL…"
  git remote add origin "$REPO_URL"
fi
ok "Origin: $(git remote get-url origin)"

# Install deps if needed
if [ ! -d "node_modules" ]; then
  log "Installing dependencies…"
  npm install
fi

# Build
log "Building project…"
npm run build

# Detect output dir
if [ -d "dist" ]; then
  BUILD_DIR="dist"
elif [ -d "build" ]; then
  BUILD_DIR="build"
else
  fail "No build output found. Expected 'dist/' or 'build/'."
  exit 1
fi
ok "Using build dir: $BUILD_DIR"

# Ensure worktree exists & tracks gh-pages
log "Preparing worktree at $PUBLISH_DIR for branch '$PUBLISH_BRANCH'…"
git fetch origin $PUBLISH_BRANCH || true
if [ -d "$PUBLISH_DIR/.git" ] || [ -f "$PUBLISH_DIR/.git" ]; then
  warn "$PUBLISH_DIR exists. Updating worktree binding…"
  # Remove stale worktree if necessary
  git worktree remove --force "$PUBLISH_DIR" 2>/dev/null || true
fi

# Add worktree (create branch if needed)
if git show-ref --verify --quiet "refs/heads/$PUBLISH_BRANCH"; then
  git worktree add -B "$PUBLISH_BRANCH" "$PUBLISH_DIR" "origin/$PUBLISH_BRANCH" 2>/dev/null || \
  git worktree add -B "$PUBLISH_BRANCH" "$PUBLISH_DIR"
else
  git worktree add -B "$PUBLISH_BRANCH" "$PUBLISH_DIR"
fi
ok "Worktree ready: $PUBLISH_DIR"

# Mirror build output into worktree
log "Syncing files to $PUBLISH_DIR (deleting removed files)…"
command -v rsync >/dev/null 2>&1 || { fail "rsync not found, please install it."; exit 1; }
rsync -av --delete "$BUILD_DIR"/ "$PUBLISH_DIR"/

# Ensure GitHub Pages processes everything
: > "$PUBLISH_DIR/.gitignore"   # empty ignores on publish branch
: > "$PUBLISH_DIR/.nojekyll"

# Optional SPA routing (uncomment if you need client-side routing):
# if [ -f "$PUBLISH_DIR/index.html" ]; then
#   cp "$PUBLISH_DIR/index.html" "$PUBLISH_DIR/404.html"
# fi

# Commit & push from worktree
pushd "$PUBLISH_DIR" >/dev/null
git add -A
git commit -m "$COMMIT_MESSAGE" || warn "No changes to commit"
log "Pushing to $PUBLISH_BRANCH…"
git push origin "$PUBLISH_BRANCH"
popd >/dev/null

ok "Deploy complete: https://byteaigc.github.io/Lynx/"
