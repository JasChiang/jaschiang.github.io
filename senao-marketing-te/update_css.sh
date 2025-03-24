#!/bin/bash

# Script to add macOS style CSS to all HTML files

for file in $(find . -name "*.html"); do
  echo "Processing $file..."
  
  # Check if the file already has the macOS style CSS
  if grep -q "macos-style.css" "$file"; then
    echo "  Already has macOS style, skipping..."
    continue
  fi
  
  # Different patterns for different files
  if grep -q "teenage-engineering-enhanced.css" "$file"; then
    # For files with enhanced CSS
    sed -i '' 's|<link rel="stylesheet" href="css/teenage-engineering-enhanced.css">|<link rel="stylesheet" href="css/teenage-engineering-enhanced.css">\n    <!-- macOS Style with Blur Effects -->\n    <link rel="stylesheet" href="css/macos-style.css">|' "$file"
  elif grep -q "teenage-engineering-animations.css" "$file"; then
    # For files with animations CSS
    sed -i '' 's|<link rel="stylesheet" href="css/teenage-engineering-animations.css">|<link rel="stylesheet" href="css/teenage-engineering-animations.css">\n    <!-- macOS Style with Blur Effects -->\n    <link rel="stylesheet" href="css/macos-style.css">|' "$file"
  elif grep -q "teenage-engineering-additions.css" "$file"; then
    # For files with additions CSS
    sed -i '' 's|<link rel="stylesheet" href="css/teenage-engineering-additions.css">|<link rel="stylesheet" href="css/teenage-engineering-additions.css">\n    <!-- macOS Style with Blur Effects -->\n    <link rel="stylesheet" href="css/macos-style.css">|' "$file"
  else
    # For files with only the base CSS
    sed -i '' 's|<link rel="stylesheet" href="css/teenage-engineering.css">|<link rel="stylesheet" href="css/teenage-engineering.css">\n    <!-- macOS Style with Blur Effects -->\n    <link rel="stylesheet" href="css/macos-style.css">|' "$file"
  fi
  
  # Remove bg-gray-50 class from body if it exists
  sed -i '' 's|<body class="bg-gray-50">|<body>|g' "$file"
  
  echo "  Updated successfully!"
done

echo "All files updated with macOS style CSS!"
