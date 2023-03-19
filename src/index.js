import { searchedLocation } from "./info"
import { renderPage } from "./dom/render"

const submitBtn = document.getElementById('submitBtn')
const searchBtn = document.getElementById('searchBtn')
const cancelBtn = document.getElementById('cancelBtn')


submitBtn.addEventListener('click', () => {
    // const weatherData = searchedLocation()
    // weatherData.then(renderPage)
    
    searchedLocation()
    .then(renderPage)
})

searchBtn.addEventListener('click', (e) => {
    const searchbox = document.getElementsByClassName('searchbox')[0]
    searchbox.classList.add('active')
    console.log(e.target.src)
})

cancelBtn.addEventListener('click', () => {
    const searchbox = document.getElementsByClassName('searchbox')[0]
    searchbox.classList.remove('active')
})