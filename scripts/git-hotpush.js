/* eslint-disable @typescript-eslint/no-var-requires */
const {
  execSync
} = require('child_process');
const readline = require('readline');

// Function to execute a command and log it
const execCommand = (command) => {
  console.log(`$ ${command}`);
  try {
    const output = execSync(command, {
      stdio: 'inherit'
    });
    return output.toString();
  } catch (error) {
    console.error(`❌ Error executing command: ${command}`);
    process.exit(1);
  }
};

// Prompt function
const prompt = (query) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => rl.question(query, (ans) => {
    rl.close();
    resolve(ans);
  }));
};

// Main function
const main = async () => {
  console.log(`
🚀 Vision: Custom GitFlow quick push command.

- NB: work on develop branch and commit everything

The script will:
- 📥 switch to master
- 🔄 pull latest
- 🔀 merge develop
- 📤 push master
- 📥 switch to develop
- 📤 push
`);

  // Parse command line options
  const forceCommit = process.argv.includes('-f') || process.argv.includes('--force');

  // Prompt user for continuation
  const continueOperation = await prompt('Continue? (y/n) ');
  if (!/^[Yy]$/.test(continueOperation)) {
    console.log('🛑 Operation cancelled.');
    process.exit(1);
  }

  if (forceCommit) {
    console.log('🔧 Force commit on develop branch enabled.');
    execCommand('git checkout develop');
    execCommand('git pull origin develop');

    const commitMessage = await prompt('📝 Enter commit message: ');
    execCommand('git add .');
    execCommand(`git commit -m "${commitMessage}"`);
  }

  console.log('📥 Switching to master branch.');
  execCommand('git checkout master');

  console.log('🔄 Pulling latest from master.');
  execCommand('git pull origin master');

  console.log('🔀 Merging develop into master.');
  execCommand('git merge develop --no-edit');

  console.log('📤 Pushing changes to master.');
  execCommand('git push origin master');

  console.log('📥 Switching back to develop branch.');
  execCommand('git checkout develop');

  console.log('📤 Pushing changes to develop.');
  execCommand('git push origin develop');

  console.log('✅ Operation completed successfully!');
};

// Run the main function
main();
