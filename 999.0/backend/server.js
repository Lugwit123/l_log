const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const port = 8000;

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.wav': 'audio/wav',
  '.mp4': 'video/mp4',
  '.woff': 'application/font-woff',
  '.ttf': 'application/font-ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.otf': 'application/font-otf',
  '.wasm': 'application/wasm'
};

const server = http.createServer((req, res) => {
  // Parse URL
  const parsedUrl = url.parse(req.url);
  let pathname = parsedUrl.pathname;
  
  // Handle static files
  if (pathname.startsWith('/static/')) {
    const filePath = path.join(__dirname, pathname);
    const ext = path.parse(filePath).ext;
    const mimeType = mimeTypes[ext] || 'application/octet-stream';
    
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end('File not found');
        return;
      }
      res.writeHead(200, { 'Content-Type': mimeType });
      res.end(data);
    });
    return;
  }
  
  // Handle test page
  if (pathname === '/' || pathname === '/test') {
    fs.readFile(path.join(__dirname, 'test_trace_fix.html'), (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Server error');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
    return;
  }
  
  // Legacy debug route: loads test_json_index.html (name kept for URL stability)
  if (pathname === '/jsontest') {
    fs.readFile(path.join(__dirname, 'test_json_index.html'), (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Server error');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
    return;
  }
  
  // Handle file position test
  if (pathname === '/filetest') {
    fs.readFile(path.join(__dirname, 'test_file_position.html'), (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Server error');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
    return;
  }
  
  // Handle debug console
  if (pathname === '/debug') {
    fs.readFile(path.join(__dirname, 'debug_console.html'), (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Server error');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
    return;
  }
  
  // Handle minimal test
  if (pathname === '/minimal') {
    fs.readFile(path.join(__dirname, 'minimal_test.html'), (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Server error');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
    return;
  }
  
  // Handle original HTML file
  if (pathname === '/original') {
    fs.readFile(path.join(__dirname, 'logs_cache/LogList/test_trace_simple/test_trace_simple.html'), (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Server error');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
    return;
  }
  
  // 404 for other paths
  res.writeHead(404);
  res.end('Not found');
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
  console.log(`Test page: http://localhost:${port}/test`);
  console.log(`Original file: http://localhost:${port}/original`);
});
