import React, { useState } from 'react'
import Days from '../components/Days'
import Navbar from '../components/Navbar'
import Temperature from '../components/Temperature'
import Place from '../components/Place'
import Main from '../components/Main'
// import Main from '../components/Main'
import './home.css'
import axios from 'axios'
import Loader from '../components/Loader'

// import { response } from 'express'


export default function Home() {
  const [data, setdata] = useState({
    value: "",
    current: {},
    weekinfo: [],
    loading: false,
    error: false,
  })

  // console.log("console ",);
  console.log("data==>", data);
  const setSearch = (event) => {
    setdata({ ...data, value: event.target.value });

  }

  const submitB = (e) => {
    e.preventDefault()
    setdata({
      
      loading:true,
      
    })
    axios.get(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${data.value}&units=metric&cnt=7&appid=d94bcd435b62a031771c35633f9f310a`).then((response) => {
      console.log("resp", response);
      console.log("val", response.data.city.name);


      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednessday', 'Thursday', 'Friday', 'Saturday']
      const currentDate = new Date()
      console.log("currentdate", currentDate);
      console.log("day", currentDate.getMonth());
      const date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${months[currentDate.getMonth()]}`;
      console.log("date", date);
      const sunset = new Date(response.data.list[0].sunset * 1000).toLocaleTimeString().slice(0, 4)
      const sunrise = new Date(response.data.list[0].sunrise * 1000).toLocaleTimeString().slice(0, 4)



      var current = {
        city: response.data.city.name,
        country: response.data.city.country,
        population: response.data.city.population,
        temp: response.data.list[0].temp.day,
        speed: response.data.list[0].speed,
        humidity: response.data.list[0].humidity,
        pressure: response.data.list[0].pressure,
        sunrise,
        sunset,
        date,


      }
      console.log("current data==>", current);



      const weeks = response.data.list
      console.log(weeks);
      const weekinfo = weeks.map((weekdetails) => {
        return {
          day: new Date(weekdetails.dt * 1000).toLocaleString('en-us', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).slice(0, 3),
          main: weekdetails.weather[0].main,
          description: weekdetails.weather[0].description,
          tempmin: weekdetails.temp.min,
          tempmax: weekdetails.temp.max,
          // sunrise:weekdetails.sunrise,
          // sunset:weekdetails.sunset,
        }
      })
      setdata({
        ...data,
        current,
        weekinfo,
        loading: false,
        error: false,
      })
        .catch(error => {
          console.log("error", error);
          setdata({
            ...data,
            loading: false,
            error: true,
            current: {},
            weekinfo: [],
          })
        })
      console.log("weekinfo==>", weekinfo);



    }


    )
  }




  console.log(data.weekinfo);



  return (
    <div className='main'>

      <div>


        <Navbar

          // value ={data.value}
          // data ={data}

          setSearch={setSearch} submitB={submitB} />

        <div className='row'  >
          

          {data.loading === true ?
            <Loader />
            :
            <div>
              {data.current.city !== undefined ?

                <div>
                  <div class="row" style={{ height: "7rem" }}></div>

                  <div class="row" style={{ height: "9rem" }}>
                  <div className='col-6' id='place'><Place details={data.current} /> </div>
                  <div className='col-6'><Temperature details={data.current} /></div>
                  </div>
                 


                  <div class="row" style={{ height: "7rem" }}></div>
                  <div className='row' id='days' ><Days days={data.weekinfo} /></div>
                </div>
                :
                data.error === true ?
                  <div>Error</div>
                  :


                  <div>
                  </div>
              }
            </div>

          }
        </div>
      </div>
    </div>


  )
}

