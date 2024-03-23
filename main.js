
 const API_URL = 'https://api.openweathermap.org/data/2.5/weather'; 
const API_KEY = 'fd48bdf8a8b87b3c140f17625f4e2d57'; 

const getWeatherHelpers = (query) => {
    fetch(`${API_URL}?${query}&appid=${API_KEY}&units=metric`)

    .then((resp)=>{
        return resp.json()
    })
    .then((data)=>{
       
        document.getElementById('city').innerText =`⌈${data.name}⌋`;
        document.getElementById('country').innerHTML = `⌈${data.sys.country}⌋`;
        document.getElementById('temp').innerText = `℃:${Math.round(data.main.temp)}`; 
        // console.log(data.weather[0].icon);
    })
    .catch((error)=>{
        console.log(error);
    })
}



(function(){
    window.navigator.geolocation.getCurrentPosition((position)=>{
        const { coords: { latitude,longitude } } = position;
        getWeatherHelpers(`lat=${latitude}&lon=${longitude}`);
    });
})()


const getWeatherData = () => {
 let input = document.getElementById("input").value.trim();
  if(input){                                    
    getWeatherHelpers(`q=${input}`);
  }else{
    
  }

};



//1.import expo
//2.
