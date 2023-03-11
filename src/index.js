const submitBtn = document.getElementById('submitBtn')
const searchbar = document.getElementById('searchbar')

const getLocation = (location) => {
    let userInput = searchbar.value
    console.log(location)
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=2e4d099728cef11505f832bb292f954b`, {mode: 'cors'})
    .then(function(response) {
        return response.json();
        })
        .then(function(response) {
        console.log(response);
        });
}

submitBtn.addEventListener('click', getLocation)

// fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=2e4d099728cef11505f832bb292f954b', {mode: 'cors'})
// .then(function(response) {
//     return response.json();
//   })
//   .then(function(response) {
//     console.log(response);
//   });