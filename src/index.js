import { currentTemp } from "./info"
import { renderPage } from "./dom/render"

const submitBtn = document.getElementById('submitBtn')

renderPage()
submitBtn.addEventListener('click', currentTemp)
