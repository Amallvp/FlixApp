import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from 'axios'

import { API_KEY, BASE_URL, IMAGE_URL } from '../Constants/Constants';

import YouTube from 'react-youtube';

function RowPost(props) {

    const [card, setCard] = useState([])
    const [urlId, setUrlId] = useState('')

    useEffect(() => {

        axios.get(BASE_URL + props.url).then((response) => {

            console.log(response.data.results[0]);

            setCard(response.data.results)

        }).catch((err) => {

            console.log(err);
        })

    }, [])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            
            autoplay: 0,
        },
    };


    const handleMovie = (id) => {
        axios.get(BASE_URL + `/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {

            console.log(response.data.results[0]);
 console.log(id);
            if (response.data.results.length !== 0) {
                 setUrlId(response.data.results[0])
             } else {
                 alert('Video Not Available')
             }

        })
    }

    return (
        <div className='row'>
            <h1>{props.title}</h1>
            <div className="posters">

                {
                    card.map((obj) =>

                        <img onClick={() => handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${IMAGE_URL + obj.backdrop_path}`} alt="" />
                    )
                }


            </div>

            {urlId && <YouTube videoId={urlId.key} opts={opts} />}

           


        </div>
    )
}


export default RowPost