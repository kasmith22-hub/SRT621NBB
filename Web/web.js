const port = 8989;
 const http = require("http");                                          
 const httpStatus = require("http-status-codes");
  const app = http.createServer((request, response) => {                  
    console.log("Received an incoming request!");
    response.writeHead(httpStatus.OK, {
      "Content-Type": "text/html"
    });                                                             

    let responseMessage = "<h1>Welcome SRT621</h1>";
    response.write(responseMessage);
    response.end();
    console.log(`Sent a response : ${responseMessage}`);
  });

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
// document.write =  + hr+':'+min+':'+sec +' '+amOrpm + '<br>' +Full_Data;

console.log( 'The time is :'+ hr +':'+min+':'+sec +' '+amOrpm + ' Date is ' + Full_Data);


app.listen(port);                                                   
console.log(`The server has started and is listening on port number:
${port}`);