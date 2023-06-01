import { useState, useEffect } from "react"
import { getMovie, deleteMovie } from "../services/Movies-api"  //We are getting getMovie and deleteMovie functions
import { useParams, useNavigate } from 'react-router-dom'   //useNavigate hook returns any information we need about a page navigation, 

export default function Movie() {
    const nav = useNavigate()                         // setting up our return to main page
    const { id } = useParams()                          // destructuring the id parameter for use
    const [movie, setMovie] = useState({})            // set up  state
    useEffect(() => {
        getMovie(id) //getting the one ToDo from the api using the id
            .then(res => setMovie(res.data))
    }, [])

    const deleteTheMovie = () => {
        deleteMovie(id) // delete function goes here
        nav('/') // navigate back to the main screen
    }

    return (
        <div className ="moviedetails">
            <h1>Movie Details:</h1>
            <h3>Title:{movie.name}</h3>
            <img src ={movie.image} alt =""/>
            <h5>Hero name:{movie.hero}</h5>
            <h5>Director name:{movie.director}</h5>
            <h5>Language:{movie.language}</h5>
            <h5>Realease:{movie.release}</h5>
            <button className="button tertiary" onClick={() => { nav(`/${id}/edit`) }}>Edit</button> &nbsp;
            <button className ="button tertiary" onClick={deleteTheMovie }>Delete</button> &nbsp;
            <button className ="button tertiary"onClick={() => { nav('/') }}>Back to Movies</button>&nbsp;
        </div>
    )
}