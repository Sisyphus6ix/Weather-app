(()=>{const e=document.getElementById("submitBtn"),t=document.getElementById("searchbar");e.addEventListener("click",(e=>{let n=t.value;console.log(e),fetch(`https://api.openweathermap.org/data/2.5/weather?q=${n}&appid=2e4d099728cef11505f832bb292f954b`,{mode:"cors"}).then((function(e){return e.json()})).then((function(e){console.log(e)}))}))})();