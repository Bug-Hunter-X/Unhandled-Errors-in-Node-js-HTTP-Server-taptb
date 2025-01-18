# Unhandled Errors in Node.js HTTP Server

This repository demonstrates a common error in Node.js applications: the lack of proper error handling in HTTP servers.  The `bug.js` file shows a basic HTTP server without any error handling. The `bugSolution.js` file provides a corrected version with comprehensive error handling.

## Bug Description
The original server lacks error handling mechanisms, leaving it vulnerable to crashes if an unexpected error occurs during request processing. This is a major issue for production applications, where uninterrupted operation is critical.

## Solution
The improved version adds error handling using the 'error' event listener and utilizes a try...catch block within the request handler to manage potential exceptions during request processing.  This ensures more robust and reliable server operation.