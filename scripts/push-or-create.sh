#!/usr/bin/env bash
set -e

REPO_NAME="${1:-phone-ai-agent-reel}"
GH_BIN="$HOME/.local/bin/gh"

if "$GH_BIN" auth status >/dev/null 2>&1; then
  echo "GitHub CLI is authenticated. Creating public repo $REPO_NAME on GitHub..."
  "$GH_BIN" repo create "$REPO_NAME" --public --source=. --remote=origin --push || true
else
  echo "GitHub CLI not yet authenticated via token. Checking remote..."
  if ! git remote get-url origin >/dev/null 2>&1; then
    git remote add origin "git@github.com:whispererofenigma/${REPO_NAME}.git"
  fi
  echo "Pushing to git@github.com:whispererofenigma/${REPO_NAME}.git..."
  git branch -M main
  git push -u origin main
fi
