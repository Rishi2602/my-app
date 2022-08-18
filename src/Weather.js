import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './App';
import { useState } from 'react';
import { render } from 'react-dom';


const Weather = () => {
  const[city,setCity]=useState("Patna");
      function Value(){
      fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid=4fed498c10157d0e8c27e1eaa31cd49e")
      .then((Response => Response.json()))
      .then((data) => {
        display(data);
        console.log(data);
        datetime()
       }
       )
      }
       function display(details){
       ReactDOM.render(
         <>
        <h1 className="heading2"><em>Weather in <span name="text" id="text">{details.name}</span></em></h1>
        <h1 id="temp" className='heading2'>{Math.round(details.main.temp-273)}°C</h1>
        <h3 id="desc" className='detail'>{details.weather[0].description}</h3>
        <h3 id="humid" className='detail'>Humidity:{details.main.humidity}%</h3>
        <h3 id="winds" className='detail'>Wind speed:{details.wind.speed}km/h</h3>
        </>,document.getElementById("report"))}
    
       setInterval(datetime,1000);
       function datetime(){
         const livedetail=new Date();
         const date = livedetail.getDate()
         const  year= livedetail.getFullYear()
        const month = livedetail.getMonth()
        const hour = livedetail.getHours()
        const min = livedetail.getMinutes()
        const sec = livedetail.getSeconds()
        const monthname=["January","February","March","April","May","June","July","August","October","November","December"]
        const mname=monthname[month]
       const ap= hour >12 ? "PM" : "AM"
       const correcth= hour>12? hour-12 : hour
       const correct=(num)=>{
        if (num>=0 && num<=9)
        return "0"+num
        else 
        return num
      }
        ReactDOM.render(
          <div>
          <h3 className="datetime" >{date}{mname},{year}</h3>
          <h3 className="datetime">{correcth}:{correct(min)}:{correct(sec)} {ap}</h3>
        </div>
        ,document.getElementById("smallbox"))
       }


return(
    <div className='bigbox'>
    <div className="box2" id="box2">

    <div className="smallbox" id='smallbox'>
    </div>

    <form className="form-controls " name="myForm" onSubmit={(e)=> e.preventDefault()}>
      <input type="search" name="city" id="search-type" placeholder="  Enter the city" onChange={(e)=>setCity(e.target.value)} required />
      <button type="submit" name="Button" className="btn2" onClick={Value}><i className="fas fa-search fa-1x icon-search"></i></button>
     <div id='report'></div>
    </form>
  </div>
  </div>
)
}

export default Weather;
