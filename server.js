const { spawn } = require('child_process');

const child = spawn(
  'node',
  [
    './node_modules/next/dist/bin/next',
    'start',
    '-p',
    process.env.PORT || '3000'
  ],
  {
    stdio: 'inherit'
  }
);

child.on('close', (code) => {
  process.exit(code);
});
