const http = require('http');
const router = require('./router');

http.createServer(router).listen(5000);
console.log('Server startet. Port: 5000');