

const date = new Date();
const n=date.toDateString();
let city="Mumbai";
let weather= {
    apikey: "8d11de79849ddc4c621e248491b738e2",
    fetchWeather: function(city){

        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="+ city + "&units=metric&appid=" + this.apikey
        ).then((response)=> response.json())
        .then((data)=>this.displayWeather(data));

},

displayWeather: function(data) {
    const {name}=data;
    const {icon, description}= data.weather[0];
    const {temp, humidity, feels_like} = data.main;
    const {speed}= data.wind;
    const {country}=data.sys;

    console.log(name,icon,description,temp,humidity,speed,country);
    document.querySelector(".city").innerText=name;
    document.querySelector(".icon").src=
    "https://openweathermap.org/img/wn/"+ icon +".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp +"°c"
    document.querySelector(".date").innerText = n;

    document.querySelector(".feels").innerText = feels_like +"°c";
    document.querySelector(".humidity").innerText =humidity +"%"
    document.querySelector(".wind").innerText =speed +"km/hr";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+ name +"')";
    
    document.querySelector(".flag").src="https://countryflagsapi.com/png/"+ country +"";

},

search: function(){
  let city= document.querySelector(".search-bar").value;
  this.fetchWeather(city);
}
};
document.querySelector(".search-button").addEventListener('click',()=>{
    
    weather.search();
});
document.querySelector(".search-bar").addEventListener('keyup',(event)=>{
    if (event.key=="Enter"){
    weather.search();
}
});
//default
weather.fetchWeather("Delhi");


