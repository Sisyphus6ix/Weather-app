let locationInfo = []

function location (city, country) {
    this.city = city
    this.country = country
}

export const currentTemp = () => {
    // Empties the array each time this function is ran
    locationInfo = []
    let userInput = searchbar.value

    // Gets the weather of the location the user inputs
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=2e4d099728cef11505f832bb292f954b`, {mode: 'cors'})
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            // console.log(response)
            // console.log(`${response.name}, ${response.sys.country}`)
            // console.log(response.main)
            // console.log(response.weather[0].description)
        
            let storedLocation = new location(response.name, response.sys.country)
            locationInfo.push(storedLocation)
            locationInfo.push(response.main)
            locationInfo.push(response.weather[0].description)
        });  
        console.log(locationInfo)

        // Clears searchbar
        searchbar.value = ''
}


// export const getForecast = () => {
//     let userInput = searchbar.value

//     fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${userInput}&appid=eff6ec262c369ae8e66d2b9f4ed0a602`, {mode: 'cors'})
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function(response) {
//             console.log(response)
//         });
// }