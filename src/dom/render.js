import { searchedLocation } from "../info"

let mainInfo = document.getElementsByClassName('main')[0]

export const renderPage = (data) => {
   console.log(data)
   clearPage()
   displayWeather(data)
}

const displayWeather = (data) => {
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

   generalInfo.setAttribute('class', 'generalInfo')
   weatherCondition.setAttribute('class', 'condition')
   degreesContainer.setAttribute('class', 'degreesContainer')
   degrees.setAttribute('class', 'degrees')
   degreesDetails.setAttribute('class', 'degreeDetails')
   extraDetails.setAttribute('class', 'extraDetails')
   weatherCondition.innerText = data[0].description
   degrees.innerText = `${data[0].temperature.temp} F°`
   degreeHigh.innerText = `High: ${data[0].temperature.temp_max} F°`
   degreeLow.innerText = `Low: ${data[0].temperature.temp_min} F°`
   degreeFeel.innerText = `Feels like: ${data[0].temperature.feels_like} F°`
   windSpeed.innerText = `Wind: ${data[0].wind} Km/h`
   humidity.innerText = `Humidity: ${data[0].temperature.humidity}.0 %`
   pressure.innerText = `Pressure: ${data[0].temperature.pressure}`

   mainInfo.appendChild(generalInfo)
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