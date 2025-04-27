// Simple script to start both client and server in development mode
import { exec } from 'child_process';

// Start the client (Vite)
const clientProcess = exec('npx vite', (error, stdout, stderr) => {
  if (error) {
    console.error(`Client process error: ${error}`);
    return;
  }
  console.log(`Client stdout: ${stdout}`);
  console.error(`Client stderr: ${stderr}`);
});

clientProcess.stdout.on('data', (data) => {
  console.log(`Client: ${data}`);
});

// Start the server
const serverProcess = exec('npx tsx server/index.ts', (error, stdout, stderr) => {
  if (error) {
    console.error(`Server process error: ${error}`);
    return;
  }
  console.log(`Server stdout: ${stdout}`);
  console.error(`Server stderr: ${stderr}`);
});

serverProcess.stdout.on('data', (data) => {
  console.log(`Server: ${data}`);
});

console.log('Development environment started. Press Ctrl+C to stop all processes.');

// Handle clean shutdown
process.on('SIGINT', () => {
  console.log('Shutting down development environment...');
  clientProcess.kill();
  serverProcess.kill();
  process.exit(0);
}); 