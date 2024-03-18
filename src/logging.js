// import { fileURLToPath } from 'url';
// import path from 'path';
// import fs from 'fs';

// const logFilename = fileURLToPath(new URL('./logs.txt', import.meta.url));
// const logStream = fs.createWriteStream(path.resolve(logFilename), { flags: 'a' });

// export { logStream, logFilename };

//  for vercel 
import { Console } from 'console'; // Import the Console class

// Create a custom console object with filtering (optional)
const customConsole = new Console({
  stdout: process.stdout, // Redirect output to standard output
  stderr: process.stderr, // Redirect errors to standard error
  // You can add filtering logic here if needed
  // (e.g., only log messages with severity level 'error')
});

export { customConsole }; // Export the custom console for logging
