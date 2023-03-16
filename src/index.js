import { searchedLocation } from "./info"
import { renderPage } from "./dom/render"

const submitBtn = document.getElementById('submitBtn')


submitBtn.addEventListener('click', () => {
    // const weatherData = searchedLocation()
    // weatherData.then(renderPage)
    
    searchedLocation()
    .then(renderPage)
})
