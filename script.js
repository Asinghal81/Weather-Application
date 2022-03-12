
var responselat = document.getElementById("data-lat");
var responselon = document.getElementById("data-long");
var responseHumidity = document.getElementById('data-humidity');
var responseTemp = document.getElementById('data-temp');
var responseWind = document.getElementById('data-wind');
var responseCity = document.getElementById('city');
var responseState = document.getElementById('state');
var responseCountry = document.getElementById('country');
var responseUvi = document.getElementById('data-uvi');
var responseWeather = document.getElementById('data-curweather');
var responseDate = document.getElementById('data-date');

// var iconurl = document.getElementById('image0').src;
var iconurl1 = document.getElementsByClassName('card-img-top').src;



var responseTempmaxfd1 = document.getElementById('fd1data-tempmax');
var responseWindfd1 = document.getElementById('fd1data-wind');
var responseTempminfd1 = document.getElementById('fd1data-tempmin');
var responseDatefd1 = document.getElementById('fd1data-date');
var responseWeatherfd1 = document.getElementById('fd1data-weather');
// var responseImage1 = document.getElementById('image1').src;

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

var responseTempmaxfd5 = document.getElementById('fd5data-tempmax');
var responseWindfd5 = document.getElementById('fd5data-wind');
var responseTempminfd5 = document.getElementById('fd5data-tempmin');
var responseDatefd5 = document.getElementById('fd5data-date');
var responseWeatherfd5 = document.getElementById('fd5data-weather');
var searchButton = document.getElementById("search");

var city = document.getElementById("city-input");
// var lat = document.getElementById("lat-input");
// var lon = document.getElementById("lon-input");
var nyButton = document.getElementById("ny");




    // renderMessage();
//requestUrlcdn = `http://api.openweathermap.org/geo/1.0/direct?q=${localStorage.getItem("cityname")}&limit=5&appid=9323ac5132fb87d9fd3d9d9058678dfa`
    

function getApi(requestUrlcdn) { // function is pulling in coordinates . request url goes in 

    fetch(requestUrlcdn)
    .then(function(res) {
      
    return res.json();
    
    })
    
    .then(function(datacdn) {
    
        console.log(datacdn);
       
        
        responselat.textContent = datacdn[0].lat;
        responselon.textContent  = datacdn[0].lon;
        responseCity.textContent = datacdn[0].name;
        responseState.textContent = datacdn[0].state;
        responseCountry.textContent = datacdn[0].country;
        console.log(datacdn[0].lat);
        console.log(datacdn[0].lon);
        localStorage.setItem("Latitude", JSON.stringify(responselat.textContent));
        localStorage.setItem("Longitude", JSON.stringify(responselon.textContent));
       

requestUrl ="https://api.openweathermap.org/data/2.5/onecall?lat="+datacdn[0].lat+"&lon="+datacdn[0].lon+"&units=imperial&appid=9323ac5132fb87d9fd3d9d9058678dfa"
      
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

            //  responseCity.textContent = data.name;
         responseWeather.textContent = data.current.weather[0].description;
        var iconcode = data.current.weather[0].icon;
        //  console.log(iconcode);
         

         document.getElementById('image0').src = `http://openweathermap.org/img/wn/${iconcode}.png`
// for(let i= 1; i <5; i++) {

//         console.lot(responseTempmaxfd[i].textContent = data.daily[i].temp.max);
//         responseTempminfd[i].textContent = data.daily[i].temp.min;
//         responseWeatherfd[i].textContent = data.daily[i].weather[0].description;
//         responseWindfd[i].textContent = data.daily[i].wind_speed;
    
//        var iconcode1 = data.daily[i].weather[0].icon;
//         //  console.log(iconcode1);
         
//         document.getElementById('image1').src = `http://openweathermap.org/img/wn/${iconcode1}.png`

//     var unixdate0 = data.daily[i].dt*1000;
//     var date0 = new Date(unixdate0)
//     // console.log(date0)
  
//         responseDatefd1.textContent = date0.getMonth()+1+ "/"+date0.getDate()+ "/"+date0.getFullYear();
       
// }

        responseTempminfd1.textContent = data.daily[1].temp.min;
        responseWeatherfd1.textContent = data.daily[1].weather[0].description;
        responseWindfd1.textContent = data.daily[1].wind_speed;
    
       var iconcode1 = data.daily[1].weather[0].icon;
        //  console.log(iconcode1);
         
        document.getElementById('image1').src = `http://openweathermap.org/img/wn/${iconcode1}.png`

    var unixdate0 = data.daily[1].dt*1000;
    var date0 = new Date(unixdate0)
    // console.log(date0)
  
        responseDatefd1.textContent = date0.getMonth()+1+ "/"+date0.getDate()+ "/"+date0.getFullYear();
        responseTempmaxfd2.textContent = data.daily[2].temp.max;
        responseTempminfd2.textContent = data.daily[2].temp.min;
        responseWeatherfd2.textContent = data.daily[2].weather[0].description;
        responseWindfd2.textContent = data.daily[2].wind_speed;
       
        var iconcode2 = data.daily[2].weather[0].icon;
        // console.log(iconcode1);
        
       document.getElementById('image2').src = `http://openweathermap.org/img/wn/${iconcode2}.png`
       var unixdate1 = data.daily[2].dt*1000;
       var date1 = new Date(unixdate1)
    //    console.log(date1)
        responseDatefd2.textContent = date1.getMonth()+1+ "/"+date1.getDate()+ "/"+date1.getFullYear();
    
   

        responseTempmaxfd3.textContent = data.daily[3].temp.max;
        responseTempminfd3.textContent = data.daily[3].temp.min;
        responseWeatherfd3.textContent = data.daily[3].weather[0].description;
        responseWindfd3.textContent = data.daily[3].wind_speed;

        var iconcode3 = data.daily[3].weather[0].icon;
        // console.log(iconcode1);
        
       document.getElementById('image3').src = `http://openweathermap.org/img/wn/${iconcode3}.png`
       
       var unixdate2 = data.daily[3].dt*1000;
       var date2 = new Date(unixdate2) 
       responseDatefd3.textContent = date2.getMonth()+1+ "/"+date2.getDate()+ "/"+date2.getFullYear();

      
        responseTempmaxfd4.textContent = data.daily[4].temp.max;
        responseTempminfd4.textContent = data.daily[4].temp.min;
        responseWeatherfd4.textContent = data.daily[4].weather[0].description;
        responseWindfd4.textContent = data.daily[4].wind_speed;

        var iconcode4 = data.daily[4].weather[0].icon;
        // console.log(iconcode4);
        var unixdate3 = data.daily[4].dt*1000;
        var date3 = new Date(unixdate3)
        responseDatefd4.textContent = date3.getMonth()+1+ "/"+date3.getDate()+ "/"+date3.getFullYear();
  
  
       document.getElementById('image4').src = `http://openweathermap.org/img/wn/${iconcode4}.png`
        
       
               responseTempmaxfd5.textContent = data.daily[5].temp.max;
               responseTempminfd5.textContent = data.daily[5].temp.min;
               responseWeatherfd5.textContent = data.daily[5].weather[0].description;
               responseWindfd5.textContent = data.daily[5].wind_speed;
       
               var iconcode5 = data.daily[5].weather[0].icon;
            //    console.log(iconcode5);
               
              document.getElementById('image5').src = `http://openweathermap.org/img/wn/${iconcode5}.png`

              var unixdate4 = data.daily[5].dt*1000;
              var date4 = new Date(unixdate4)
              responseDatefd5.textContent = date4.getMonth()+1+ "/"+date4.getDate()+ "/"+date4.getFullYear();
          });
     
}
getApi(requestUrl);  
    })
} 

// getApi(requestUrlcdn);

var nyButton = document.getElementById("ny");
nyButton.addEventListener("click", function(event) {
    event.preventDefault();
    
    var cityn= {
      city: "New York",
    };

     localStorage.setItem("cityn", JSON.stringify(cityn));
        
     requestUrlcdn = `http://api.openweathermap.org/geo/1.0/direct?q=${localStorage.getItem("cityn")}&limit=5&appid=9323ac5132fb87d9fd3d9d9058678dfa`
    
console.log(cityn)
getApi(requestUrlcdn)

});
var denButton = document.getElementById("den");

denButton.addEventListener("click", function(event) {
    event.preventDefault();
    
    var cityn= {
      city: "Denver",
    };

     localStorage.setItem("cityn", JSON.stringify(cityn));
        
     requestUrlcdn = `http://api.openweathermap.org/geo/1.0/direct?q=${localStorage.getItem("cityn")}&limit=5&appid=9323ac5132fb87d9fd3d9d9058678dfa`
    
console.log(cityn)
getApi(requestUrlcdn)

});

var chiButton = document.getElementById("chi");

chiButton.addEventListener("click", function(event) {
    event.preventDefault();
    
    var cityn= {
      city: "Chicago",
    };

     localStorage.setItem("cityn", JSON.stringify(cityn));
        
     requestUrlcdn = `http://api.openweathermap.org/geo/1.0/direct?q=${localStorage.getItem("cityn")}&limit=5&appid=9323ac5132fb87d9fd3d9d9058678dfa`
    
console.log(cityn)
getApi(requestUrlcdn)

});
var miaButton = document.getElementById("mia");
miaButton.addEventListener("click", function(event) {
    event.preventDefault();
    
    var cityn= {
      city: "Miami",
    };

     localStorage.setItem("cityn", JSON.stringify(cityn));
        
     requestUrlcdn = `http://api.openweathermap.org/geo/1.0/direct?q=${localStorage.getItem("cityn")}&limit=5&appid=9323ac5132fb87d9fd3d9d9058678dfa`
    
console.log(cityn)
getApi(requestUrlcdn)

});
var sfoButton = document.getElementById("sfo");
sfoButton.addEventListener("click", function(event) {
    event.preventDefault();
    
    var cityn= {
      city: "San Francisco",
    };

     localStorage.setItem("cityn", JSON.stringify(cityn));
        
     requestUrlcdn = `http://api.openweathermap.org/geo/1.0/direct?q=${localStorage.getItem("cityn")}&limit=5&appid=9323ac5132fb87d9fd3d9d9058678dfa`
    
console.log(cityn)
getApi(requestUrlcdn)

});

var ausButton = document.getElementById("aus");
ausButton.addEventListener("click", function(event) {
    event.preventDefault();
    
    var cityn= {
      city: "Austin",
    };

     localStorage.setItem("cityn", JSON.stringify(cityn));
        
     requestUrlcdn = `http://api.openweathermap.org/geo/1.0/direct?q=${localStorage.getItem("cityn")}&limit=5&appid=9323ac5132fb87d9fd3d9d9058678dfa`
    
console.log(cityn)
getApi(requestUrlcdn)

});

searchButton.addEventListener("click", function(event) {
    event.preventDefault();
    
    var cityname= {
      city: city.value.trim(),
    };
    localStorage.setItem("cityname", JSON.stringify(cityname));
    requestUrlcdn = `http://api.openweathermap.org/geo/1.0/direct?q=${localStorage.getItem("cityname")}&limit=5&appid=9323ac5132fb87d9fd3d9d9058678dfa`
    getApi(requestUrlcdn)
});