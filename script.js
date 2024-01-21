let place=''
let temperature=''
let feels=''
let date=''
let url1='https://api.openweathermap.org/data/2.5/weather'
let apiKey='0f1f247b349319d828c87d5b18cca8d5'
const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };

function initialization()
{
    place='Tirupur'
    document.getElementById("place").innerHTML=`<span>${place}</span>`
    fetchWeather();
}
document.addEventListener("DOMContentLoaded",()=>
{
    initialization();
});
function searchPlace()
{
    let placeId=document.getElementById("search");
    place=placeId.value;
    document.getElementById("place").innerHTML=`<span>${place}</span>`
    fetchWeather();
}

function fetchWeather()
{
    const url=`${url1}?q=${place}&appid=${apiKey}&units=metric`;

    fetch(url).then(response=>response.json())
    .then(data=>
        {
            console.log(data);
            temperature=data.main.temp+', India';
            feels=data.weather[0].main;
            date = new Intl.DateTimeFormat('en-US', options).format(Date.now());
            document.getElementById("temperature").innerHTML=`<span>${temperature}</span>`
            document.getElementById("feels").innerHTML=`<span>${feels}</span>`
            document.getElementById("date").innerHTML=`<span>${date}</span>`
        })
    .catch(error =>
        {
            console.error("Error fetching in weather data:",error)
        })

}
