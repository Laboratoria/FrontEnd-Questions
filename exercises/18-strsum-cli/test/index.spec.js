const path = require('path');
const { execSync, spawn } = require('child_process');
const bin = path.join(__dirname, '../solutions/index.js');

describe('strsum', () => {
  it('should handle input as args', () => {
    const stdout = execSync(`node "${bin}" Pepita`, {
      shell: true,
      stdio: ['inherit', 'pipe', 'pipe'],
    });
    expect(`${stdout}`.trim()).toBe('611');
  });

  it('should handle input as stdin', (done) => {
    const chunks = [];
    const child = spawn(bin, [], {});

    child.stdout.on('data', chunk => chunks.push(chunk));
    child.on('close', () => {
      expect(chunks.join('').trim()).toBe('1261')
      done();
    });

    child.stdin.end('Pepita Pérez');
  });

  it.skip('should propmt user when no args nor stdin', (done) => {
    // Can not test because child process always has stdin.isTTY undefined,
    // unless we set stdin to inherit, which doesnt make sense!!!
  });
});