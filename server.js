const restify = require('restify');
const path = require('path');
const http = require('http');
const router = require('./router');

const port = process.env.port || 3003;

const app = restify.createServer({
    name: 'webserverTest',
    version: '1.0.0'
})

require(path.join(__dirname, 'routes', 'index'))(app);


app.listen(port, function (err) {
    console.log(err);
    console.log('%s is listening on %s', app.name, port);
})

// const http = require('http');
// const router = require('./router');

// http.createServer(router).listen(3003);
// console.log('Server startet. Port: 3003');