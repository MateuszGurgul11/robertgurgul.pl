#!/usr/bin/env bash
# Deploy Firestore + Storage rules to production Firebase project.
# Usage: ./scripts/deploy-firebase-rules.sh [project-id]
set -euo pipefail

PROJECT_ID="${1:-robertgurgul-2da28}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"

cd "$ROOT/firebase"
firebase deploy --only firestore:rules,storage:rules --project "$PROJECT_ID"

echo "Rules deployed for project: $PROJECT_ID"
