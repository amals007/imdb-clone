import React, {useEffect, useState} from "react"
import "./MovieList.css"
import { useParams } from "react-router-dom"
import Card from "../Card/Card"

const MovieList = () => {
    
    const [movieList, setMovieList] = useState([])
    const {type} = useParams()

    // useEffect(() => {
    //     getData()
    //     console.log('i am first useEffect');
    // }, [])

    useEffect(() => {
        getData()
        
    }, [type])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "upcoming"}?api_key=b14e0aeb4a2eb281fe2afcabe7c81940&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }

    return (
        <div className="movie__list">
            <h2 className="list__title">{(type ? type  : "UPCOMING").toUpperCase().replace(/_/g, ' ')}</h2>   
           
        
            <div className="list__cards">
                {
                    movieList.map(movie => (

                        <Card movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList
// (type ? type : "POPULAR").toUpperCase()