import 'bootstrap/dist/css/bootstrap.min.css'

import { getWeather } from './api/base'
import { renderWeather } from './dom/weather'

let weatherContainerElement = document.querySelector(".weather-container")
let citySearchForm = document.querySelector("#weather-search")

citySearchForm.addEventListener("submit", (event)=>{
    event.preventDefault()
    let cityInput = event.target.elements["city-name"]
    let cityInputValue = cityInput.value.trim()

    // console.log(cityInputValue)
    if(cityInputValue === ""){
        cityInput.classList.add("is-invalid")
    }
    else{
        console.log("display weather of "+cityInputValue)

        getWeather(cityInputValue).then((data)=>{
            console.log(data)
            renderWeather(data, weatherContainerElement)
        })
    }

})



