(()=>{"use strict";function e(e,t){this.city=e,this.country=t}let t=document.getElementsByClassName("main")[0];const n=e=>{console.log(e),i(),r(e)},r=e=>{let n=document.createElement("div"),r=document.createElement("h3"),i=document.createElement("div"),a=document.createElement("h1"),d=document.createElement("div"),c=document.createElement("p"),p=document.createElement("p"),s=document.createElement("p"),l=document.createElement("div"),m=document.createElement("p"),u=document.createElement("p"),o=document.createElement("p");n.setAttribute("class","generalInfo"),r.setAttribute("class","condition"),i.setAttribute("class","degreesContainer"),a.setAttribute("class","degrees"),d.setAttribute("class","degreeDetails"),l.setAttribute("class","extraDetails"),r.innerText=e[0].description,a.innerText=`${e[0].temperature.temp} F°`,c.innerText=`High: ${e[0].temperature.temp_max} F°`,p.innerText=`Low: ${e[0].temperature.temp_min} F°`,s.innerText=`Feels like: ${e[0].temperature.feels_like} F°`,m.innerText=`Wind: ${e[0].wind} Km/h`,u.innerText=`Humidity: ${e[0].temperature.humidity}.0 %`,o.innerText=`Pressure: ${e[0].temperature.pressure}`,t.appendChild(n),n.appendChild(r),n.appendChild(i),i.appendChild(a),i.appendChild(d),d.appendChild(s),d.appendChild(c),d.appendChild(p),t.appendChild(l),l.appendChild(m),l.appendChild(u),l.appendChild(o)},i=()=>{t.innerHTML=""};document.getElementById("submitBtn").addEventListener("click",(()=>{(async()=>{let t=[],n=searchbar.value;return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${n}&appid=2e4d099728cef11505f832bb292f954b`,{mode:"cors"}).then((function(e){return e.json()})).then((function(n){let r={location:new e(n.name,n.sys.country),temperature:n.main,description:n.weather[0].description,wind:n.wind.speed};t.push(r)})),searchbar.value="",t})().then(n)}))})();