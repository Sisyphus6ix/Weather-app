import { searchedLocation } from "./info"
import { renderPage, searchboxCheck } from "./dom/render"

const searchBtn = document.getElementById('searchBtn')
const cancelBtn = document.getElementById('cancelBtn')

searchBtn.addEventListener('click', () => {
    searchboxCheck()

    const searchbox = document.getElementsByClassName('searchbox')[0]
    searchbox.classList.add('active')
    
})

cancelBtn.addEventListener('click', () => {
    const searchbox = document.getElementsByClassName('searchbox')[0]
    searchbox.classList.remove('active')
})