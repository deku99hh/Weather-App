const serchButt = document.getElementById('serch') as HTMLElement;
const serchInput = document.getElementById('serchInput') as HTMLInputElement ;
let serch: string;
let main = document.querySelector('main') as HTMLElement;
console.log(main);

interface WeatherData {
    main: {
        temp: number;
    };
    weather: {
        description: string;
    }[];
    rain?: {
        "1h"?: number;
    };
}


async function gitTheWeather(city: string) {
    try{
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=eba9ebd6ff1378f16fbd02e0dcfe8714`);

        if (response.ok) {
            let data: WeatherData = await response.json();
            console.log(response);
            console.log(data);

            main.classList.add('d-block')
            main.classList.remove('d-none')
            // let condition = data.weather[0].description;
            let condition = data.weather?.[0]?.description ?? "No description";
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
        
            main.classList.add('d-block')
            main.classList.remove('d-none')

            main.innerHTML=`
                <h1>Wrong name</h1>
            `;

    }
    
};
// gitTheWeather('ciro');

serchButt.addEventListener('click',()=>{
    serch = serchInput.value;
    serchInput.value = '';
    console.log(serch);
    gitTheWeather(serch);
});

