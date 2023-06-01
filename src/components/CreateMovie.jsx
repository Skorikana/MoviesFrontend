import { useNavigate } from "react-router-dom"
import { createMovie } from '../services/Movies-api'

function Create() {

    const nav = useNavigate()
    const createTheMovie = (e) => {
        e.preventDefault();
        const movie = {
            name: e.target.name.value, image: e.target.image.value, hero: e.target.hero.value, director: e.target.director.value,
            language: e.target.language.value, release: e.target.release.value
        }
        createMovie(movie).then(() => nav(`/`))
    }

    return (
        <div className="createmovie">
            <h2>Add a Movie</h2><br />
            <form onSubmit={createTheMovie}>
                <h3>Name:</h3>      <input type='text' name='name' placeholder="Enter Movie name" id='name' /> <br />
                <h3>Image:</h3>     <input type='text' name='image' placeholder="Enter Image URl" id='image' /><br />
                <h3>Hero:</h3>            <input type='text' name='hero' placeholder="Enter Hero name" id='hero' /><br />
                <h3>Director:</h3>       <input type='text' name='director' placeholder="Enter Director name" id='director' /><br />
                <h3>Language:</h3>        <input type='text' name='language' placeholder="Enter Language" id='language' /><br />
                <h3>Release:</h3>         <input type='text' name='release' placeholder="Enter Release info" id='release' /><br />
                <input type='submit' value="Add movie" /> &nbsp;&nbsp;
            </form>
        </div>
    )
}

export default Create
