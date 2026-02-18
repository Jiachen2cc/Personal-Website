#!/usr/bin/env bash
set -euo pipefail

if ! command -v npm >/dev/null 2>&1; then
  echo "npm 未安装，请先安装 Node.js 20+：https://nodejs.org/"
  exit 1
fi

echo "[1/2] 安装依赖..."
npm install

echo "[2/2] 启动开发服务器..."
npm run dev
