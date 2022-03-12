
var lat = document.getElementById("lat-input");
var lon = document.getElementById("lon-input");
var responseHumidity = document.getElementById('data-humidity');
var responseTemp = document.getElementById('data-temp');
var responseWind = document.getElementById('data-wind');
var responseCity = document.getElementById('data-city');
var responseUvi = document.getElementById('data-uvi');
var responseWeather = document.getElementById('data-curweather');
var responseDate = document.getElementById('data-date');

var responseTempmaxfd1 = document.getElementById('fd1data-tempmax');
var responseWindfd1 = document.getElementById('fd1data-wind');
var responseTempminfd1 = document.getElementById('fd1data-tempmin');
var responseDatefd1 = document.getElementById('fd1data-date');
var responseWeatherfd1 = document.getElementById('fd1data-weather');

var responseTempmaxfd2 = document.getElementById('fd2data-tempmax');
var responseWindfd2 = document.getElementById('fd2data-wind');
var responseTempminfd2 = document.getElementById('fd2data-tempmin');
var responseDatefd2 = document.getElementById('fd2data-date');
var responseWeatherfd2 = document.getElementById('fd2data-weather');

var responseTempmaxfd3 = document.getElementById('fd3data-tempmax');
var responseWindfd3 = document.getElementById('fd3data-wind');
var responseTempminfd3 = document.getElementById('fd3data-tempmin');
var responseDatefd3 = document.getElementById('fd3data-date');
var responseWeatherfd3 = document.getElementById('fd3data-weather');

var responseTempmaxfd4 = document.getElementById('fd4data-tempmax');
var responseWindfd4 = document.getElementById('fd4data-wind');
var responseTempminfd4 = document.getElementById('fd4data-tempmin');
var responseDatefd4 = document.getElementById('fd4data-date');
var responseWeatherfd4 = document.getElementById('fd4data-weather');
var searchButton = document.getElementById("search");

var city = document.getElementById("city-input")
var responselat = document.getElementById("data-lat")
var responselon = document.getElementById("data-long")
var searchButton = document.getElementById("search");


searchButton.addEventListener("click", function(event) {
    event.preventDefault();
    
    var cityname= {
      city: city.value.trim(),
    };
    localStorage.setItem("cityname", JSON.stringify(cityname));

    // renderMessage();
requestUrlcdn = `http://api.openweathermap.org/geo/1.0/direct?q=${localStorage.getItem("cityname")}&limit=5&appid=9323ac5132fb87d9fd3d9d9058678dfa`
    

function getApi(requestUrlcdn) { // function is pulling in coordinates . request url goes in 

    fetch(requestUrlcdn)
    .then(function(response) {
      
    return response.json();
    
    })
    
    .then(function(datacdn) {
    
        console.log(datacdn);

        responselat.textContent = datacdn[0].lat;
        responselon.textContent  = datacdn[0].lon;
        city.textContent = datacdn[0].name;


    });
    
    }
    getApi(requestUrlcdn);
});






searchButton.addEventListener("click", function(event) {
    event.preventDefault();
    var latitude= {

      lat: lat.value,
     
      };

      var longitude = {
        lon: lon.value,
      }
      localStorage.setItem("latitude", JSON.stringify(latitude));
      localStorage.setItem("longitude", JSON.stringify(longitude));



      
requestUrl =`https://api.openweathermap.org/data/2.5/onecall?lat=`+lat.value+`&lon=`+lon.value+`&units=imperial&appid=9323ac5132fb87d9fd3d9d9058678dfa`

function getApi(requestUrl) {

    fetch(requestUrl)
    .then(function(response) {
      
    return response.json();
    
    })
    .then(function(data) {
    
        console.log(data);
    
        var unixdate = data.current.dt*1000;
    var date = new Date(unixdate)
    

        responseDate.textContent = date.getMonth()+1+ "/"+date.getDate()+ "/"+date.getFullYear();
    
         responseUvi.textContent = data.current.uvi;
         responseTemp.textContent = data.current.temp;

         responseHumidity.textContent = data.current.humidity;

         responseWind.textContent = data.current.wind_speed;

             responseCity.textContent = data.name;
         responseWeather.textContent = data.current.weather[0].description;
    
        responseTempmaxfd1.textContent = data.daily[1].temp.max;
        responseTempminfd1.textContent = data.daily[1].temp.min;
        responseWeatherfd1.textContent = data.daily[1].weather[0].description;
        responseWindfd1.textContent = data.daily[1].wind_speed;
       
    var unixdate0 = data.daily[1].dt*1000;
    var date0 = new Date(unixdate0)
    console.log(date0)



        responseDatefd1.textContent = date0.getMonth()+1+ "/"+date0.getDate()+ "/"+date0.getFullYear();
       
     var unixdate1 = data.daily[2].dt*1000;
     var date1 = new Date(unixdate1)
     console.log(date1)

        responseTempmaxfd2.textContent = data.daily[2].temp.max;
        responseTempminfd2.textContent = data.daily[2].temp.min;
        responseWeatherfd2.textContent = data.daily[2].weather[0].description;
        responseWindfd2.textContent = data.daily[2].wind_speed;
        responseDatefd2.textContent = date1.getMonth()+1+ "/"+date1.getDate()+ "/"+date1.getFullYear();
    
    var unixdate2 = data.daily[3].dt*1000;
    var date2 = new Date(unixdate2)

        responseTempmaxfd3.textContent = data.daily[3].temp.max;
        responseTempminfd3.textContent = data.daily[3].temp.min;
        responseWeatherfd3.textContent = data.daily[3].weather[0].description;
        responseWindfd3.textContent = data.daily[3].wind_speed;
        responseDatefd3.textContent = date2.getMonth()+1+ "/"+date2.getDate()+ "/"+date2.getFullYear();

 var unixdate3 = data.daily[4].dt*1000;
 var date3 = new Date(unixdate3)
        responseTempmaxfd4.textContent = data.daily[4].temp.max;
        responseTempminfd4.textContent = data.daily[4].temp.min;
        responseWeatherfd4.textContent = data.daily[4].weather[0].description;
        responseWindfd4.textContent = data.daily[4].wind_speed;
        responseDatefd4.textContent = date3.getMonth()+1+ "/"+date3.getDate()+ "/"+date3.getFullYear();
    });
    

    
    }

    getApi(requestUrl);

});



