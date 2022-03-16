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
document.getElementById('date').innerHTML =  + hr+':'+min+':'+sec +' '+amOrpm + '<br>' +Full_Data;


console.log( 'The time is :'+ hr +':'+min+':'+sec +' '+amOrpm + ' Date is ' + Full_Data);

