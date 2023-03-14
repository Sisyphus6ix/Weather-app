function location (city, country) {
    this.city = city
    this.country = country
}

export const searchedLocation = () => {
    // Empties the array each time this function is called
    let array = []

    let userInput = searchbar.value

        // Gets the weather of the location the user inputs
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=2e4d099728cef11505f832bb292f954b`, {mode: 'cors'})
            .then(function(response) {
                return response.json();
            })
            .then(function(response) {
                // console.log(response)

                let locationDetails = { 
                location: new location(response.name, response.sys.country),
                tempature: response.main,
                description: response.weather[0].description
                }

            array.push(locationDetails)
            // console.log(array[0])
        });
    
    // Clears searchbar
    searchbar.value = ''
    return array
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