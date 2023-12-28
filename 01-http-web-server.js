const http = require('http');
const url = require('url');
const queryString = require('querystring');

function simple_calc(var1, var2) {
    return var1 * var2;
};

const server = http.createServer((req,res) => {
    const reqUrl = new URL(req.url, `http://${req.headers.host}`);
    console.log('::Client address   :', req.socket.remoteAddress);
    console.log('::Client port      :', req.socket.remotePort);
    console.log('::Request command  :', req.method);
    console.log('::Request line     :', req.method + ' ' + req.url + ' HTTP/' + req.httpVersion);
    console.log('::Request path     :', reqUrl.pathname);
    console.log('::Request version  : HTTP/', req.httpVersion);

    const parsedUrl = url.parse(req.url);
    const parsedQuery = queryString.parse(parsedUrl.query, '&', '=');
    res.writeHead(200);

    if(req.method == "GET") {
        console.log("## GET activated");

        if(parsedUrl.query) {
            const result = simple_calc(parseInt(parsedQuery.var1), parseInt(parsedQuery.var2));
            res.write("<html>");
            res.write(`GET request for calculation => ${parsedQuery.var1} x ${parsedQuery.var2} = ${result}!` );
            res.write("</html>");
            console.log(`## GET request for calculation => ${parsedQuery.var1} x ${parsedQuery.var2} = ${result}!`);
        }
        else{
            res.write('<html>');
            res.write(`<p>HTTP Request GET for path: ${parsedUrl.path}</p>`);
            res.write('</html>');
            console.log(`## GET request for directory => ${parsedUrl.path}`);
        }
    }
    else if(req.method == "POST") {
        console.log('## POST activated');
        let body = '';
        
        req.on('data', function(data) {
            body += data;
        });

        
        req.on('end', function() {
            const post = JSON.parse(body);
            const result = simple_calc(parseInt(post.var1), parseInt(post.var2));
            res.write(`POST request for calculation => ${post.var1} x ${post.var2} = ${result}!`);
            console.log(`## POST request data => ${body}`);
            console.log(`## POST request for calculation => ${post.var1} x ${post.var2} = ${result}!`);
        });
    }

    res.end();
});

server.listen(8080, () => {
    const server_name = "localhost";
    console.log(`## HTTP Server started at http://${server_name}:8080`);
})

