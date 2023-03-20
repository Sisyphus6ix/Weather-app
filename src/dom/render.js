import { searchedLocation } from "../info"

let mainInfo = document.getElementsByClassName('main')[0]

export const renderPage = (data) => {
   console.log(data)
   clearPage()
   displayWeather(data)
}

const displayWeather = (data) => {
   let header = document.createElement('div')
   let headerInfo = document.createElement('h1')
   let generalInfo = document.createElement('div')
   let weatherCondition = document.createElement('h3')
   let degreesContainer = document.createElement('div')
   let degrees = document.createElement('h1')
   let degreesDetails = document.createElement('div')
   let degreeHigh = document.createElement('p')
   let degreeLow = document.createElement('p')
   let degreeFeel = document.createElement('p')
   let extraDetails = document.createElement('div')
   let windSpeed = document.createElement('p')
   let humidity = document.createElement('p')
   let pressure = document.createElement('p')

   header.setAttribute('class', 'location')
   generalInfo.setAttribute('class', 'generalInfo')
   weatherCondition.setAttribute('class', 'condition')
   degreesContainer.setAttribute('class', 'degreesContainer')
   degrees.setAttribute('class', 'degrees')
   degreesDetails.setAttribute('class', 'degreeDetails')
   extraDetails.setAttribute('class', 'extraDetails')
   headerInfo.innerText = `${data[0].location.city}, ${data[0].location.country}`
   let weatherConditionInfo = data[0].description
   weatherCondition.innerText = weatherConditionInfo.toUpperCase()
   degrees.innerText = Math.round(((`${data[0].temperature.temp}` - 273.15) * 1.8) + 32) + '°F'
   degreeHigh.innerText = `High: ` + Math.round(((`${data[0].temperature.temp_max}` - 273.15) * 1.8) + 32) + '°F'
   degreeLow.innerText = `Low: ` + Math.round(((`${data[0].temperature.temp_min}` - 273.15) * 1.8) + 32) + '°F'
   degreeFeel.innerText = `Feels like: `+ Math.round(((`${data[0].temperature.feels_like}` - 273.15)* 1.8) + 32)  + '°F'
   windSpeed.innerText = `Wind: ` + Math.round(`${data[0].wind}` * 0.6214) + ' MPH'
   humidity.innerText = `Humidity: ${data[0].temperature.humidity}.0%`
   pressure.innerText = `Pressure: ${data[0].temperature.pressure}`

   mainInfo.appendChild(generalInfo)
   generalInfo.appendChild(header)
   header.appendChild(headerInfo)
   generalInfo.appendChild(weatherCondition)
   generalInfo.appendChild(degreesContainer)
   degreesContainer.appendChild(degrees)
   degreesContainer.appendChild(degreesDetails)
   degreesDetails.appendChild(degreeFeel)
   degreesDetails.appendChild(degreeHigh)
   degreesDetails.appendChild(degreeLow)
   mainInfo.appendChild(extraDetails)
   extraDetails.appendChild(windSpeed)
   extraDetails.appendChild(humidity)
   extraDetails.appendChild(pressure)
}

const clearPage = () => {
   mainInfo.innerHTML = ''
}

export const searchboxCheck = () => {
   let searchbox = document.getElementsByClassName('searchbox')[0]
   
   if (searchbox.classList.contains('active')) {
      searchedLocation()
      .then(renderPage)
   }
}