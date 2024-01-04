// api url = "https://api.openweathermap.org/data/2.5/weather?q=Jaunpur&appid=5d83ca1cd9087e2b5051bafe3d55d49b&units=metric"
const apiKeys = "5d83ca1cd9087e2b5051bafe3d55d49b"
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
let whetherCondition = document.getElementById('whether-condition')
async function handlePromise(city){
    let fetchingApi = await fetch(apiUrl + city +`&appid=${apiKeys}`)
    if(fetchingApi.status == 404){
        document.getElementById('error').style.display ='block'
        document.querySelector('.weather').style.display = 'none'
        return

    }
     let jsonData = await fetchingApi.json()
     console.log(jsonData)
     document.querySelector('.city').innerText = jsonData.name
     document.querySelector('.temp').innerText = Math.round(jsonData.main.temp) + "°C"
     document.querySelector('.humidity').innerText = jsonData.main.humidity + "%"
     document.querySelector('.wind').innerText = jsonData.wind.speed + "km/h"
     if(jsonData.weather[0].main == 'Clouds'){
        whetherCondition.src = 'cloud.jpg'
     } 
     else if(jsonData.weather[0].main == 'Clear'){
        whetherCondition.src = 'clear.jpg'

     } 
     else if(jsonData.weather[0].main == 'Rain'){
        whetherCondition.src = 'rain.jpg'
        
    } 
    else if(jsonData.weather[0].main == 'Drizzle'){
        whetherCondition.src = 'drizzle.jpg'
        
    }
    else if(jsonData.weather[0].main == 'Mist'){
        whetherCondition.src = 'mist.jpg'
        
    }
    document.querySelector('.weather').style.display = 'block'
    document.getElementById('error').style.display ='none'

}

searchBtn.addEventListener('click',function(){

    handlePromise(searchBox.value)
    
})