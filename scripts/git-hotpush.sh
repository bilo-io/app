#!/bin/bash

echo "
🚀 Vision: Custom GitFlow quick push command.

- NB: work on develop branch and commit everything

The script will:
- 📥 switch to master
- 🔄 pull latest
- 🔀 merge develop
- 📤 push master
- 📥 switch to develop
- 📤 push
"

# Define a flag variable
FORCE_COMMIT=false

# Parse command line options
while [[ "$1" =~ ^- && ! "$1" == "--" ]]; do case $1 in
  -f | --force )
    FORCE_COMMIT=true
    ;;
esac; shift; done
if [[ "$1" == '--' ]]; then shift; fi

# Prompt user for continuation
read -p "Continue? (y/n) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]
then
    echo "🛑 Operation cancelled."
    exit 1
fi

if [ "$FORCE_COMMIT" = true ] ; then
    echo "🔧 Force commit on develop branch enabled."
    git checkout develop
    git pull origin develop

    read -p "📝 Enter commit message: " commit_message
    git add .
    git commit -m "$commit_message"
fi

echo "📥 Switching to master branch."
git checkout master

echo "🔄 Pulling latest from master."
git pull origin master

echo "🔀 Merging develop into master."
git merge develop

echo "📤 Pushing changes to master."
git push origin master

echo "📥 Switching back to develop branch."
git checkout develop

echo "📤 Pushing changes to develop."
git push origin develop

echo "✅ Operation completed successfully!"
