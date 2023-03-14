import { searchedLocation } from "../info"

let mainInfo = document.getElementsByClassName('main')[0]

export const renderPage = (data) => {
   console.log(data)
   mainInfo.innerText = '123'
}
