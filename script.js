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
            
        }else{
            throw new Error('could not get it');
        }
    }
    catch(error){
        console.error(error);
        console.error('can not');
    }
    
};
gitTheWeather('ciro');

serchButt.addEventListener('click',()=>{
    serch = serchInput.value;
    serchInput.value = '';
    console.log(serch);
    gitTheWeather(serch);
});