const API_KEY = "cb4fc89a3817cded262601d10b1e93b5";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const info = document.querySelector("#weather"); 
            info.innerText = `${data.sys.country}/${data.weather[0].main}/${data.main.temp}deg`;
});
}

function onGeoError() {
    alert("Can't find you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);