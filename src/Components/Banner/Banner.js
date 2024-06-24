import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from 'axios'
import { API_KEY, BASE_URL, IMAGE_URL } from '../Constants/Constants'




function Banner() {

const [movie, setMovie] = useState()


    useEffect(() => {
    
    axios.get(BASE_URL+`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{

        // console.log(response.data.results);

        setMovie(response.data.results[10])
    })
   
      
    }, [])
    

  return (
    
    <div className='banner' style={{backgroundImage:`url(${movie ?IMAGE_URL+ movie.backdrop_path:''})`}}>
        <div className='content'>
<h1 className='title'>
{movie ? movie.title :''}
</h1>

<div className='banner-buttons'>
    <button className='button'>Play</button>
    <button className='button'>My List</button>
</div>

<h2 className='description'>
   {movie ? movie.overview :''}
</h2>
        </div>

        <div className="fade">


        </div>

    </div>
  )
}

export default Banner