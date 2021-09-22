

const cityForm = document.querySelector('form');


const card = document.querySelector('.card');
const details = document.querySelector('.details');

const time = document.querySelector('img .time');
const icon = document.querySelector('.icon img')

const updateUI = (data) => {
    const cityDets = data.cityDets;
    const weather = data.weather;

    details.innerHTML = `
    <h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>` ;
    
    if (card.classList.contains('d-none')){
        card.classList.remove('d-none');
    };

    const iconSrc = `icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src',iconSrc);


    let timeSrc = null;
    if (weather.isDayTime){
        timeSrc = 'day.svg';
    }else {
        timeSrc = 'night.svg';
    }
    time.setAttribute('src',timeSrc);
};

const updateCity = async (city)=>{
    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);
    return {cityDets: cityDets,
            weather : weather};};


cityForm.addEventListener('submit',e=>{
    e.preventDefault();
    const city = cityForm.city.value.trim();
    cityForm.reset;

    updateCity(city)
    .then(data=> updateUI(data))

    
    .catch(err => console.log(err));
});





























//  const cityForm = document.querySelector('form');

// const card = document.querySelector('.card');
// const details = document.querySelector('.details');


// const updateUI = (data)=>{
//     const cityDets= data.cityDets;
//     const weather = data.weather;

//     //update details template

//     details.innerHTML = `
//             <h5 class="my-3">${cityDets.EnglishName}</h5>
//             <div class="my-3">${weather.WeatherText}</div>
//             <div class="display-4 my-4">
//               <span>${weather.Temperature.Metric.value}</span>
//               <span>&deg;C</span>
//             </div>
//           `;

//     //remove d-none
//     if(card.classList.contains('d-none')){
//         card.classList.remove('d-none');
//     }
// };


// const updateCity = async (city) => {
//     const cityDets = await getCity(city);
//     const weather = await getWeather(cityDets.key);
//     return {cityDets. weather};
// }

// cityForm.addEventListener('submit',e=>{
//     e.preventDefault();

//     const city = cityForm.city.value.trim();

//     cityForm.reset();

//     //update UI to get new city

//     updateCity(city)
//         .then(data => updateUI(data))
//         .catch(err => console.log(err)));


//     localStorage.setItem('city',city);

// });


// if(localStorage.getItem('city')){

//     updateCity(localStorage.getItem('city'))
//         .then(data=>updateUI(data))
//         .catch(err => console.log(err)); 
// }







 



