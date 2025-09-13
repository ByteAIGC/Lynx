#!/bin/bash
set -euo pipefail

echo "Deploying Lynx to GitHub Pages"

# -------- Safe defaults --------
: "${DEFAULT_REPO_URL:=git@github.com:ByteAIGC/Lynx.git}"
: "${REPO_URL:=${1:-$DEFAULT_REPO_URL}}"
: "${PUBLISH_BRANCH:=gh-pages}"
: "${PUBLISH_DIR:=.gh-pages}"
: "${COMMIT_MESSAGE:=Deploy to GitHub Pages - $(date)}"
# -------------------------------

log()  { printf '%s\n' "INFO  $*"; }
ok()   { printf '%s\n' "OK    $*"; }
warn() { printf '%s\n' "WARN  $*"; }
fail() { printf '%s\n' "ERROR $*"; exit 1; }

# Ensure bash locale is plain ASCII to avoid surprises
export LC_ALL=C

# Git init / remote
if [ ! -d .git ]; then git init; fi
if git remote get-url origin >/dev/null 2>&1; then
  cur="$(git remote get-url origin)"
  if [ "$cur" != "${REPO_URL}" ]; then git remote set-url origin "${REPO_URL}"; fi
else
  git remote add origin "${REPO_URL}"
fi
ok "Origin: $(git remote get-url origin)"

# Install & build
if [ ! -d node_modules ]; then log "Installing deps"; npm install; fi
log "Building"; npm run build

# Detect output
if [ -d dist ]; then BUILD_DIR="dist"
elif [ -d build ]; then BUILD_DIR="build"
else fail "No build output found (dist/ or build/)"; fi
ok "Using build dir: ${BUILD_DIR}"

# Clean stale worktree if present
if [ -e "${PUBLISH_DIR}" ]; then
  git worktree remove --force "${PUBLISH_DIR}" 2>/dev/null || { rm -rf "${PUBLISH_DIR}"; git worktree prune; }
fi

# Prepare worktree
log "Preparing worktree at ${PUBLISH_DIR} for branch ${PUBLISH_BRANCH}"
git fetch origin "${PUBLISH_BRANCH}" || true
if git show-ref --verify --quiet "refs/heads/${PUBLISH_BRANCH}"; then
  git worktree add -B "${PUBLISH_BRANCH}" "${PUBLISH_DIR}" "origin/${PUBLISH_BRANCH}" 2>/dev/null || \
  git worktree add -B "${PUBLISH_BRANCH}" "${PUBLISH_DIR}"
else
  git worktree add -B "${PUBLISH_BRANCH}" "${PUBLISH_DIR}"
fi
ok "Worktree ready: ${PUBLISH_DIR}"

# Sync files (mirror)
log "Syncing build to ${PUBLISH_DIR}"
if command -v rsync >/dev/null 2>&1; then
  rsync -av --delete "${BUILD_DIR}/" "${PUBLISH_DIR}/"
else
  # Safe delete without odd globs
  find "${PUBLISH_DIR}" -mindepth 1 -maxdepth 1 -exec rm -rf {} +
  cp -a "${BUILD_DIR}/." "${PUBLISH_DIR}/"
fi

# Ensure publish branch has no ignores/Jekyll blocking
: > "${PUBLISH_DIR}/.gitignore"
: > "${PUBLISH_DIR}/.nojekyll"
# Optional SPA routing:
# [ -f "${PUBLISH_DIR}/index.html" ] && cp "${PUBLISH_DIR}/index.html" "${PUBLISH_DIR}/404.html"

# Commit & push
pushd "${PUBLISH_DIR}" >/dev/null
git add -A
git commit -m "${COMMIT_MESSAGE}" || warn "No changes to commit"
log "Pushing to ${PUBLISH_BRANCH}"
git push origin "${PUBLISH_BRANCH}"
popd >/dev/null

ok "Done: https://byteaigc.github.io/Lynx/"
