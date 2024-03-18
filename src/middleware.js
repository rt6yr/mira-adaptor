// import fs from 'fs';  
// import { logStream, logFilename } from './logging.js';  
  
// export const logToFile = (ipAddress, message) => {
//   const now = new Date();
//   const formattedDate = now.toLocaleString();
//   const logMessage = `[${formattedDate}] [IP: ${ipAddress}] ${message}\n`;
//   fs.appendFile(logFilename, logMessage, (err) => {
//     if (err) {
//       console.error('Error writing to log file:', err);
//     }
//   });
// };

// export const logMessage = (message) => {
//   const now = new Date();
//   const formattedDate = now.toLocaleString();
//   logStream.write(`[${formattedDate}] ${message}\n`);
// };
