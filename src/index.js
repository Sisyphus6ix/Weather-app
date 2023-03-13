import { locationInfo, searchedLocation } from "./info"
import { renderPage } from "./dom/render"

const submitBtn = document.getElementById('submitBtn')

renderPage(locationInfo)
submitBtn.addEventListener('click', searchedLocation)
