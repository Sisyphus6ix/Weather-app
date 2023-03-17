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
   let temp_cloudContainer = document.createElement('div')
   let temperatures = document.createElement('div')
   let clouds = document.createElement('div')
   let todayTemp = document.createElement('p')
   let highLowTempContainer = document.createElement('div')
   let lowTemp = document.createElement('p')
   let highTemp = document.createElement('p')
   let cloudDetails = document.createElement('p')
   
   temp_cloudContainer.setAttribute('class', 'tempDiv')
   temperatures.setAttribute('class', 'degrees')
   clouds.setAttribute('class', 'cloudInfo')
   todayTemp.innerText = `${data[0].temperature.temp}F°`
   lowTemp.innerText = `${data[0].temperature.temp_min}`
   highTemp.innerText = `${data[0].temperature.temp_max}`

   temperatures.appendChild(todayTemp)
   highLowTempContainer.appendChild(lowTemp)
   highLowTempContainer.appendChild(highTemp)
   temperatures.appendChild(highLowTempContainer)
   temp_cloudContainer.appendChild(temperatures)
   temp_cloudContainer.appendChild(clouds)
   mainInfo.appendChild(temp_cloudContainer)
}

const clearPage = () => {
   mainInfo.innerHTML = ''
}