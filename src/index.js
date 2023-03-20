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

// Function now works with enter keypress
document.addEventListener('keypress', (event) => {
    let keyCode = event.keyCode ? event.keyCode : event.which;

    if(keyCode === 13) {
        // call click function of the buttonn
        searchBtn.click();
      }
})