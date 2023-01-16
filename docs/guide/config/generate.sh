#!/bin/sh

FILE="fields.md"

echo "# Config Fields\n" > "$FILE"
echo "> More info coming soon...\n" >> "$FILE"
awirix config info --markdown >> "$FILE"