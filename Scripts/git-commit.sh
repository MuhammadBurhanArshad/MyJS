#!/bin/bash

# ==========================================
# git-commit.sh
# Automatically commits new, modified, and
# deleted files with descriptive messages.
# ==========================================

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
PROJECT_ROOT="$( cd "$SCRIPT_DIR/.." && pwd )"
cd "$PROJECT_ROOT" || exit 1

echo "📂 Working directory: $PROJECT_ROOT"
echo ""

# Handle modified files
echo "🔧 Handling modified files..."
git diff --name-only --diff-filter=M | while read -r file; do
    if [ -f "$file" ]; then
        git add "$file"
        git commit -m "Update $(basename "$file")" -- "$file"
        echo "   ✅ Updated: $file"
    fi
done

# Handle deleted files  
echo "🗑️  Handling deleted files..."
git diff --name-only --diff-filter=D | while read -r file; do
    git rm "$file" 2>/dev/null
    git commit -m "Delete $(basename "$file")" -- "$file"
    echo "   ✅ Deleted: $file"
done

# Handle new files
echo "✨ Handling new files..."
git ls-files --others --exclude-standard | while read -r file; do
    if [ -f "$file" ]; then
        git add "$file"
        git commit -m "Create $(basename "$file")" -- "$file"
        echo "   ✅ Created: $file"
    fi
done

echo ""
echo "🎉 All changes committed!"
