function location (city, country) {
    this.city = city
    this.country = country
}

export const searchedLocation = async () => {
    // Empties the array each time this function is called
    let array = []

    let userInput = searchbar.value

        // Gets the weather of the location the user inputs
       await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=2e4d099728cef11505f832bb292f954b`, {mode: 'cors'})
            .then(function(response) {
                return response.json();
            })
            .then(function(response) {
                // console.log(response)

                let locationDetails = { 
                location: new location(response.name, response.sys.country),
                temperature: response.main,
                description: response.weather[0].description,
                wind: response.wind.speed
                }

            array.push(locationDetails)
        });
    
    // Clears searchbar
    searchbar.value = ''
    return array
}