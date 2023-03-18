let mainInfo = document.getElementsByClassName('main')[0]

export const renderPage = (data) => {
   console.log(data)
   clearPage()
   displayWeather(data)
}

// const getDate = () => {
//    const date = new Date();

//    let day = date.getDate();
//    let month = date.getMonth() + 1;
//    let year = date.getFullYear();

//    let currentDate = `${day}-${month}-${year}`;
//    console.log(currentDate);
// }

const displayWeather = (data) => {
   let generalInfo = document.createElement('div')
   let weatherCondition = document.createElement('h3')
   let degreesContainer = document.createElement('div')
   let degrees = document.createElement('h1')
   let degreesDetails = document.createElement('div')
   let degreeHigh = document.createElement('p')
   let degreeLow = document.createElement('p')
   let degreeFeel = document.createElement('p')

   generalInfo.setAttribute('class', 'generalInfo')
   weatherCondition.setAttribute('class', 'condition')
   degreesContainer.setAttribute('class', 'degreesContainer')
   degrees.setAttribute('class', 'degrees')
   degreesDetails.setAttribute('class', 'degreeDetails')
   weatherCondition.innerText = data[0].description
   degrees.innerText = `${data[0].temperature.temp} F°`
   degreeHigh.innerText = `${data[0].temperature.temp_max} F°`
   degreeLow.innerText = `${data[0].temperature.temp_min} F°`
   degreeFeel.innerText = `${data[0].temperature.feels_like} F°`


   mainInfo.appendChild(generalInfo)
   generalInfo.appendChild(weatherCondition)
   generalInfo.appendChild(degreesContainer)
   degreesContainer.appendChild(degrees)
   degreesContainer.appendChild(degreesDetails)
   degreesDetails.appendChild(degreeFeel)
   degreesDetails.appendChild(degreeHigh)
   degreesDetails.appendChild(degreeLow)
}

const clearPage = () => {
   mainInfo.innerHTML = ''
}