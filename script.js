const apiKey = "dc6b9a860f3d4d07bb1a78538895af39";
const apiURL = `https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=${apiKey}&q=`;


const searchbtn= document.querySelector(".search .btn");
const searchBox= document.querySelector(".search #cityname");


async function checkWeather(city){
   
    const response = await fetch(apiURL+city);
    
    if(response.status == 404){
     document.querySelector(".error").style.display = "block";
     document.querySelector(".weather").style.display = "none";

    }
    else{
    
    
    var data = await response.json();
    

    document.getElementById("city").innerHTML =data.name;
    document.getElementById("temp").innerHTML =Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML =data.main.humidity + "%";
    document.querySelector(".wind").innerHTML =data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        document.querySelector(".weather-img").src = "weather-app-img/images/clouds.png"
    } else    if(data.weather[0].main == "Rain"){
        document.querySelector(".weather-img").src = "weather-app-img/images/rain.png"
    } else    if(data.weather[0].main == "Mist"){
        document.querySelector(".weather-img").src = "weather-app-img/images/mist.png"
    } else    if(data.weather[0].main == "Snow"){
        document.querySelector(".weather-img").src = "weather-app-img/images/snow.png"
    } else    if(data.weather[0].main == "Drizzle"){
        document.querySelector(".weather-img").src = "weather-app-img/images/drizzle.png"
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }
}

searchbtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value);
})


