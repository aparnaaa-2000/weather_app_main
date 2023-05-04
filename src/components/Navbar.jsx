
import React from 'react'
import './navbar.css'

export default function Navbar({setSearch,submitB}) {



  

  

  return (

    <div className='containerNav'>
        <div className='row'>
          <div className='col-3'></div>
            <div className='col-6' id='nav'>
            
  
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search"  onChange={setSearch} name="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-primary"  onClick={submitB}  type="submit">Search</button>
    </form>
  

            </div>
            {/* <div className='col-3' id='day'></div> */}
        </div>
    </div>
  )
}
