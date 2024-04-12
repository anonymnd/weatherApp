
    const apiKey = "0283320a47a153e9bc26ee8127d13135";
    const urlApi ="https://api.openweathermap.org/data/2.5/weather?units=metric";
    const tempEl = document.querySelector(".temp") ,
    cityEl = document.querySelector(".city") ,
    humidityEl = document.querySelector(".humidity") ,
    windEl =document.querySelector(".wind") , 
    inputEl = document.querySelector(".search"),
    imageEL = document.querySelector(".image")
    ;
    var errorEl = document.querySelector(".error"),
    weatherEl = document.querySelector(".weather");
;

;
    document.querySelector(".btnInput").addEventListener("click",()=>{
        weatherData(inputEl.value);
    })
    async function weatherData(inputValue){
        const response = await fetch(urlApi+`&appid=${apiKey}&q=${inputValue}`);
        var data = await response.json();
        if(response.status == 404){
            errorEl.style.display="block"
            weatherEl.style.display="none";
        }
        cardFill(data);
        weatherEl.style.display="block";
        errorEl.style.display="none"

    }
    function cardFill(data){
        tempEl.innerHTML=Math.round(data.main.temp)+"°C";
        cityEl.innerHTML=data.name;
        humidityEl.innerHTML=data.main.humidity ;
        windEl.innerHTML=data.wind.speed +"km/h";
        imageUpdate(data);
    }
    function imageUpdate(data) {
    try {
        if (data.weather[0].main == "Clouds") {
            imageEL.src = "images/clouds.png";
        } else if (data.weather[0].main == "Rain") {
            imageEL.src = "images/rain.png";
        } else if (data.weather[0].main == "Snow") {
            imageEL.src = "images/snow.png";
        } else if (data.weather[0].main == "Mist") {
            imageEL.src = "images/mist.png";
        } else if (data.weather[0].main == "Drizzle") {
            imageEL.src = "images/drizzle.png";
        } else if (data.weather[0].main == "Clear") {
            imageEL.src = "images/clear.png";
        } else {
            // Handle the case where the weather condition doesn't match any known conditions
            console.error("Unknown weather condition:", data.weather[0].main);
        }
    } catch (error) {
        // Handle any errors that occur during image update
        console.error("Error updating image:", error);
    }
}
        
    

