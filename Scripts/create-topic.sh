#!/bin/bash

# ==========================================
# create_topic.sh
# Creates a new JS topic folder with
# EMPTY README.md, index.js, and index.html files,
# opens all three in nano for editing,
# then executes index.js and opens index.html
# in the default browser.
# ==========================================

# Check if folder name is provided
if [ -z "$1" ]; then
    echo "❌ Error: Please provide a folder name."
    echo "Usage: ./create_topic.sh <folder_name>"
    exit 1
fi

FOLDER_NAME="../$1"

# Create the folder
mkdir -p "$FOLDER_NAME"
echo "📁 Folder created: $FOLDER_NAME"

# Create empty README.md file
README_FILE="$FOLDER_NAME/README.md"
touch "$README_FILE"
echo "📄 Created empty: $README_FILE"

# Create empty index.js file
JS_FILE="$FOLDER_NAME/index.js"
touch "$JS_FILE"
echo "🟨 Created empty: $JS_FILE"

# Create empty index.html file
HTML_FILE="$FOLDER_NAME/index.html"
touch "$HTML_FILE"
echo "🌐 Created empty: $HTML_FILE"

# Open the README.md file in nano for editing
echo ""
echo "📝 Step 1: Opening README.md in nano editor..."
echo "   (Save with CTRL+O, Enter, then Exit with CTRL+X)"
echo ""
sleep 1
nano "$README_FILE"

# Open the JS file in nano for editing
echo ""
echo "📝 Step 2: Opening index.js in nano editor..."
echo "   (Save with CTRL+O, Enter, then Exit with CTRL+X)"
echo ""
sleep 1
nano "$JS_FILE"

# Open the HTML file in nano for editing
echo ""
echo "📝 Step 3: Opening index.html in nano editor..."
echo "   (Save with CTRL+O, Enter, then Exit with CTRL+X)"
echo ""
sleep 1
nano "$HTML_FILE"

# Execute the JS file with Node
echo ""
echo "🚀 Running $JS_FILE..."
echo "=========================================="
node "$JS_FILE"
echo "=========================================="

# Open the HTML file in the default browser
echo ""
echo "🌐 Opening $HTML_FILE in browser..."
if command -v xdg-open > /dev/null; then
    xdg-open "$HTML_FILE"
elif command -v open > /dev/null; then
    open "$HTML_FILE"       # macOS
elif command -v start > /dev/null; then
    start "$HTML_FILE"      # Windows (Git Bash)
else
    echo "⚠️  Could not detect a browser opener. Please open $HTML_FILE manually."
fi

echo ""
echo "✅ Done! All three files created, index.js executed, and index.html opened."
