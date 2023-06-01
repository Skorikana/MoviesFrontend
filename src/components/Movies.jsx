import { getMovies } from "../services/Movies-api"
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

export default function Movies() {
    // const nav = useNavigate()
    const [movies, setMovies] = useState([])
    useEffect(() => {
        getMovies() // calling the function to get the data
            .then(res => setMovies(res.data)) // setting state with returned data
    }, [])
    console.log(movies)
    return (
        <div className="movielist">
            <ul>
                {movies.map((movie) => {
                    return (
                        <div className="card1">
                            <Link to={`/${movie._id}`}><br />
                                <div clasName="card"></div>
                                <h1>{movie.name}</h1>
                            </Link>
                            <img src={movie.image} alt="movieimage" /><br />
                        </div>

                    )
                }
                )
                }

            </ul>

        </div>
    )
}