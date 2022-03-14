const port = 8989;
const http = require("http");
const httpStatus = require("http-status-codes");
//creating a server with callback
const app = http.createServer((request, response) => {
    console.log("Recieved an incoming request!");
    response.writeHead(httpStatus.OK, {
        "Content-Type": "text/html",
    });
    let responseMessage = "<h1> Hello, SRT621!</h1>";
    response.write(responseMessage);
    response.end();
    console.log('Sent a response : ${responseMessage}');
});
//starting webserver
app.listen(port);
console.log('The Server has started and is listening on port number: ${port}');