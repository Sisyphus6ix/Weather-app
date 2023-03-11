let locationInfo = {}

// export const getLocation = () => {
//     let userInput = searchbar.value
    
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=2e4d099728cef11505f832bb292f954b`, {mode: 'cors'})
//     .then(function(response) {
//         return response.json();
//         })
//         .then(function(response) {
//         console.log(response)
//         // console.log(response.name)
//         // console.log(response.sys.country)
//         // console.log(response.main.temp);
//         // console.log(response.weather[0].main)
//         // console.log(response.weather[0].description)
//         });
// }

export const getLocation = () => {
    let userInput = searchbar.value

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${userInput}&appid=eff6ec262c369ae8e66d2b9f4ed0a602`, {mode: 'cors'})
    .then(function(response) {
        return response.json();
        })
        .then(function(response) {
        console.log(response)
        // console.log(response.name)
        // console.log(response.sys.country)
        // console.log(response.main.temp);
        // console.log(response.weather[0].main)
        // console.log(response.weather[0].description)
        });
}