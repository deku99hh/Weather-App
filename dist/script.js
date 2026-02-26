var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const serchButt = document.getElementById('serch');
const serchInput = document.getElementById('serchInput');
let serch;
let main = document.querySelector('main');
console.log(main);
function gitTheWeather(city) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c;
        try {
            let response = yield fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=eba9ebd6ff1378f16fbd02e0dcfe8714`);
            if (response.ok) {
                let data = yield response.json();
                console.log(response);
                console.log(data);
                main.classList.add('d-block');
                main.classList.remove('d-none');
                // let condition = data.weather[0].description;
                let condition = (_c = (_b = (_a = data.weather) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.description) !== null && _c !== void 0 ? _c : "No description";
                let tempCelsius = Math.floor(data.main.temp - 273.15);
                let rainVolume = data.rain ? data.rain["1h"] : 0;
                console.log(condition);
                main.innerHTML = `
                <p class="cityName display-1">${serch}</p>
                <p class="temperature">${tempCelsius}°C</p>
                <p class="Rainfall">Rainfall:${rainVolume}%</p>
                <p class="condition h4">${condition}</p>
                <p class="emoji display-2">☀️</p>
            `;
            }
            else {
                throw new Error('could not get it');
            }
        }
        catch (error) {
            console.error(error);
            console.error('can not');
            main.classList.add('d-block');
            main.classList.remove('d-none');
            main.innerHTML = `
                <h1>Wrong name</h1>
            `;
        }
    });
}
;
// gitTheWeather('ciro');
serchButt.addEventListener('click', () => {
    serch = serchInput.value;
    serchInput.value = '';
    console.log(serch);
    gitTheWeather(serch);
});
