const fs = require('fs');
const path = require('path');
const readline = require('readline');

const pkgPath = path.resolve(__dirname, '../package.json');
const pkg = require(pkgPath);

const currentVersion = pkg.version.split('.').map(Number);

console.log(`📄 Current version: ${pkg.version}`);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const askQuestion = (query) => new Promise((resolve) => rl.question(query, resolve));

(async () => {
  const major = await askQuestion(`Select major version (${currentVersion[0]}): `);
  const minor = await askQuestion(`Select minor version (${currentVersion[1]}): `);
  const patch = await askQuestion(`Select patch version (${currentVersion[2]}): `);

  const newVersion = `${major || currentVersion[0]}.${minor || currentVersion[1]}.${patch || currentVersion[2]}`;
  pkg.version = newVersion;

  console.log(`🚀 New version: ${newVersion}`);

  const versionData = JSON.stringify({
    version: newVersion
  }, null, 2);

  // Write to public/version.json
  fs.writeFile(path.resolve(__dirname, '../public/version.json'), versionData, (err) => {
    if (err) {
      console.error('❌ Error writing to public/version.json');
      throw err;
    }
    console.log('✅ Data written to public/version.json');
  });

  // Write to src/version.json
  fs.writeFile(path.resolve(__dirname, '../src/version.json'), versionData, (err) => {
    if (err) {
      console.error('❌ Error writing to src/version.json');
      throw err;
    }
    console.log('✅ Data written to src/version.json');
  });

  rl.close();
})();
