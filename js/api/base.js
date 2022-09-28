// replace your api key 
const API_KEY = "ee162d1d6205476fb7bb45dc0f5151f3"

// create getWeather function here

const getWeather = (cityName) =>{
    
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`)
    .then((response)=>{
        return response.json()
    }).then ((data)=>{
        console.log(data)
        return data
    })
}

// export the getWeather function

export {getWeather}