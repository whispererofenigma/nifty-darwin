#!/usr/bin/env bash
# ==============================================================================
# Setup Script for Dedicated Cloud Runner (GitHub Actions Self-Hosted)
# Run this on your cloud VM (Ubuntu 22.04 / 24.04 on AWS, GCP, Azure, or VPS)
# ==============================================================================

set -euo pipefail

echo "==> 1. Updating system and installing media & headless browser libraries..."
sudo apt-get update
sudo apt-get install -y \
  curl \
  tar \
  jq \
  git \
  ffmpeg \
  fonts-noto-color-emoji \
  fonts-roboto \
  fonts-freefont-ttf \
  libnss3 \
  libatk1.0-0 \
  libatk-bridge2.0-0 \
  libcups2 \
  libdrm2 \
  libxkbcommon0 \
  libxcomposite1 \
  libxdamage1 \
  libxrandr2 \
  libgbm1 \
  libasound2t64 || sudo apt-get install -y libasound2

echo "==> 2. Installing Node.js 20 LTS..."
if ! command -v node >/dev/null 2>&1; then
  curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
  sudo apt-get install -y nodejs
fi

echo "==> Node version: $(node -v)"
echo "==> NPM version:  $(npm -v)"
echo "==> FFmpeg:       $(ffmpeg -version | head -n 1)"

echo ""
echo "=========================================================================="
echo " Cloud VM is ready for Remotion GPU/CPU rendering!"
echo " To connect this runner to your GitHub repository:"
echo " 1. Go to your repo: https://github.com/whispererofenigma/<repo>/settings/actions/runners"
echo " 2. Click 'New self-hosted runner' -> Linux -> x64"
echo " 3. Copy the token and run the config command printed on GitHub."
echo "=========================================================================="
