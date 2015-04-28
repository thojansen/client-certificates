var https = require('https');
var fs = require('fs');         

var options = {
    key:    fs.readFileSync('ssl/server.key'),
    cert:   fs.readFileSync('ssl/server.crt'),
    ca:     fs.readFileSync('ssl/rootCA.crt'),
    requestCert:        true,
    rejectUnauthorized: false
};

https.createServer(options, function (req, res) {
    if (req.client.authorized) {
        res.writeHead(200);
        res.end('approved');
    } else {
        res.writeHead(401);
        res.end('denied');
    }
}).listen(5000);