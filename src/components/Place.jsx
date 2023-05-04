import React from 'react'
import './place.css'

export default function containerPlace ({details}) {
  return (
    <div className='containerPlace'>
        <div className='row'>
            <div className='col' id='day'>
                <h1>{details.city}{details.country}</h1>
                <h3>{details.date}</h3>
                <h5>Population: {details.population}</h5>

            </div>
        </div>
    </div>
  )
}
