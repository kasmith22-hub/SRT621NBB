const port = 8989,
  http = require("http"),
  httpStatus = require("http-status-codes"),
  app = http.createServer((request, response) => {
    console.log("Received an incoming request!");
    response.writeHead(httpStatus.OK, {
      "Content-Type": "text/html",
    });

const curentTime = new Date().toString();
    let responseMessage = curentTime;
    response.write(responseMessage);
    response.end();
    console.log(`Sent a response : ${responseMessage}`);
  });

app.listen(port);
console.log(`The server has started and is listenign on port number: ${port}`);

