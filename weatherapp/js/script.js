var div = document.querySelectorAll('div');
var th = document.querySelectorAll('th');
var td = document.querySelectorAll('td');
function gettingJSON(){
    fetch("https://api.weatherapi.com/v1/current.json?key=502c5f2d02a34e40941202241211112&q=Alexandria&aqi=no&days=2")
    .then(response => response.json())
    .then(function(data){
        div[0].innerHTML = "<p> Country: "+"<br>"+data.location.country+"</p>";
        div[1].innerHTML = "<p> State: "+"<br>"+data.location.name+"</p>";
        div[2].innerHTML = "<p>"+"Latitude: "+data.location.lat + "<br>" +"Longitude: "+data.location.lon+"</p>";
        div[3].innerHTML = "<p> LocalTime: "+data.location.localtime+"</p>";
        div[4].innerHTML = "<p> TimeZone: "+data.location.tz_id+"</p>";
        td[0].innerHTML = data.current.condition.text;
        td[1].innerHTML = `<img src = ${data.current.condition.icon}>`;
        td[2].innerHTML = data.current.temp_c+" c <sup>0</sup>";
        td[3].innerHTML = data.current.temp_f+" f <sup>0</sup>" ;
        td[4].innerHTML = data.current.wind_degree+"<sup>0</sup>";
        td[5].innerHTML = data.current.wind_dir;
        td[6].innerHTML = data.current.wind_mph+"mph";
        td[7].innerHTML = data.current.cloud+"%";
        td[8].innerHTML = data.current.humidity+"%";
        td[9].innerHTML = data.current.pressure_in+"in";
    })
    
         
}

gettingJSON();


