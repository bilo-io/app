#!/bin/bash

# Directory containing the SVG files
directory="src/components/Core/Icon/FlagIcon/assets"

# Substring to replace
old_substring="-svgrepo-com"
new_substring=""

# Check if directory exists
if [ ! -d "$directory" ]; then
    echo "Directory $directory does not exist."
    exit 1
fi

# Iterate over all SVG files in the specified directory
for file in "$directory"/*.svg; do
    # Check if the file exists and is a regular file
    if [ -f "$file" ]; then
        # Check if the file contains the old substring
        if [[ "$file" == *"$old_substring"* ]]; then
            # Create the new filename by replacing the old substring with the new substring
            new_file="${file//$old_substring/$new_substring}"
            
            # Rename the file
            mv "$file" "$new_file"
            
            echo "Renamed: $file -> $new_file"
        else
            echo "File does not contain the substring: $file"
        fi
    else
        echo "No SVG files found in the directory."
    fi
done

echo "Renaming process completed."
