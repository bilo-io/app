#!/bin/bash

# Load environment variables from .env file
if [ -f .env ]; then
  while IFS= read -r line; do
    if [[ "$line" == \#* ]]; then
      continue  # Skip comment lines
    fi
    export "$line"
  done < .env
fi

# Navigate to the directory where your React project is located
npm install -g yarn
yarn
npx react-scripts start