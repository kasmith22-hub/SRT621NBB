const port = 8989;
const http = require("http");
const httpStatus = require("http-status-codes");
//creating a server with callback
const app = http.createServer((request, response) => {
    console.log("Recieved an incoming request!");
    response.writeHead(httpStatus.OK, {
        "Content-Type": "text/html",
    });
    let responseMessage = "<h1> Hello, SRT621!</h1> <script>" ;
    response.write(responseMessage);
    response.end();
    console.log('Sent a response : ${responseMessage}');
});
//starting webserver
app.listen(port);
console.log('The Server has started and is listening on port number: ${port}');

var NowDate = new Date();
var Full_Data = NowDate.getFullYear()+'-'+(NowDate.getMonth()+1)+'-'+NowDate.getDate();
var Fullhour = NowDate.getHours();
var hr = NowDate.getHours();
var min = NowDate.getMinutes();
var sec = NowDate.getSeconds();
var amOrpm = 'AM';

if(hr == 0){
    hr = 12;
}
if(hr > 12){
    hr = hr - 12;
    amOrpm = "PM";
}     
console.log ('${hr}:${min} :${sec} ${amOrpm} ${Full_Data}');

