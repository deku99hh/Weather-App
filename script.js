const serchButt = document.getElementById('serch');
const serchInput = document.getElementById('serchInput');
let serch;
let main = document.querySelector('main');
console.log(main);

async function gitTheWeather(city) {
    try{
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=eba9ebd6ff1378f16fbd02e0dcfe8714`);

        if (response.ok) {
            let data = await response.json();
            console.log(response);
            console.log(data);

            main.classList.add('d-block')
            main.classList.remove('d-none')
            let condition = data.weather[0].description;
            let tempCelsius = Math.floor(data.main.temp - 273.15);
            let rainVolume = data.rain ? data.rain["1h"] : 0;

            console.log(condition);
            main.innerHTML=`
                <p class="cityName display-1">${serch}</p>
                <p class="temperature">${tempCelsius}°C</p>
                <p class="Rainfall">Rainfall:${rainVolume}%</p>
                <p class="condition h4">${condition}</p>
                <p class="emoji display-2">☀️</p>
            `;
            
        }else{
            throw new Error('could not get it');
        }
    }
    catch(error){
        console.error(error);
        console.error('can not');
    }
    
};
// gitTheWeather('ciro');

serchButt.addEventListener('click',()=>{
    serch = serchInput.value;
    serchInput.value = '';
    console.log(serch);
    gitTheWeather(serch);
});