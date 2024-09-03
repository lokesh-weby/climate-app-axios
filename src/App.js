import React, {  useState } from 'react'
import Axios from 'axios'
import './App.css';
import dayclearsky from './assests/01d.png'
import nightclearsky from './assests/01n.png'
import dayFewclouds from './assests/02d.png'
import nightFewclouds from './assests/02n.png'
import scatter from './assests/03d.png'
import brokencloud from './assests/04d.png'
import showerRain from './assests/09d.png'
import dayRain from './assests/10d.png'
import nightRain from './assests/10n.png'
import Thunder from './assests/11d.png'
import snow from './assests/13d.png'
import mist from './assests/50d.png'




function App() {
  const [cityname, setCityname]=useState('chennai');
  const [Temp, setTemp]=useState('--');
  const [city, setCity]=useState('--');
  const [desc, setDesc]=useState('--');
  const [country,setCountry]=useState('--')
  const [icon,setIcon]=useState("02n")
  const [humidity,setHumidity]=useState("--")
  const [wind,setWind]=useState("--")
  const [Latitude,setLatitude]=useState(0)
  const [longitude,setLongitude]=useState(0)



    
    const result=()=>{
      var location=cityname
      Axios.get('https://api.openweathermap.org/data/2.5/weather?q='+location+'&appid=986e8ad96c8f4bc8f2c6169047f90d6b&units=metric')
      .then(res=>(  console.log(res.data)||setTemp(res.data['main']['temp'])  || setDesc(res.data['weather']['0']['description'])  || setCity(res.data['name']) || setCountry(res.data['sys']['country']) || setIcon(res.data['weather']['0']['icon']) || setHumidity(res.data['main']['humidity'])
    || setWind(res.data['wind']['speed']) || setLongitude(res.data['coord']['lon']) || setLatitude(res.data['coord']['lat']))).catch(e=>alert('Sorry you entered a city is not found..'))
    
    
    }
function cty(e){
  setCityname(e.target.value);
  
}
function entered(e){
  if(e.key ==="Enter"){
    result()
  }
}
var climateContition={
  "01d":dayclearsky,
  "01n":nightclearsky,
  "02d":dayFewclouds,
  "02n":nightFewclouds,
  "03d":scatter,
  "03n":scatter,
  "04d":brokencloud,
  "04n":brokencloud,
  "09d":showerRain,
  "09n":showerRain,
  "10d":dayRain,
  "10n":nightRain,
  "11d":Thunder,
  "11n":Thunder,
  "13d":snow,
  "13n":snow,
  "50d":mist,
  "50n":mist
}


  return (
    <>
  
    <div className='container'>
      <div className='wrapper'>
        <h1 className='text-center my-2 text-light'>Weather app </h1>
        <div className='input my-2'>
      <input type='text' placeholder='Enter the City Name' spellCheck='false' onChange={cty} onKeyDown={entered} />
      <button onClick={result}>Search</button>
      </div>
        <div className='img'>
        <img src={climateContition[icon]}></img>
        </div>
        <div className='info'>
         <h3>{Temp} ℃</h3>
         <h2 className='text-warning'>{city}</h2>
         <h3>{country}</h3>
         <div className='data'>
         <p>Humidity: {humidity}%</p>
          <p>Wind:{wind}km/h</p>
          <p>Longitude: {longitude}</p>
          <p>Latitude: {Latitude}</p>
        
         </div>
        </div>    
    </div>
    </div>

    
    </>
    
  );
}

export default App;
