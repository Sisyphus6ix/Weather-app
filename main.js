(()=>{"use strict";function e(e,t){this.city=e,this.country=t}let t=document.getElementsByClassName("main")[0];document.getElementById("submitBtn").addEventListener("click",(()=>{var n;n=(()=>{let t=[],n=searchbar.value;return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${n}&appid=2e4d099728cef11505f832bb292f954b`,{mode:"cors"}).then((function(e){return e.json()})).then((function(n){let a={location:new e(n.name,n.sys.country),tempature:n.main,description:n.weather[0].description};t.push(a)})),searchbar.value="",t})(),console.log(n),t.innerText="123"}))})();