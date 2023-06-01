import { getMovie, editMovie } from "../services/Movies-api"
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


export default function EditMovie() {
  const { id } = useParams()
  const nav = useNavigate()
  const [data, setData] = useState({})

  useEffect(() => {
    getMovie(id) // getting the movie that matches this id
      .then(res => setData(res.data))
  }, [])

  const editTheMovie = e => {
    e.preventDefault()
    const updatedMovie = {
      name: e.target.name.value, image: e.target.image.value, hero: e.target.hero.value, director: e.target.director.value,
      language: e.target.language.value, release: e.target.release.value, complete: e.target.complete.checked
    }
    editMovie(id, updatedMovie).then(() =>nav(`/${id}`))
  }
  return (
    <div className="editmovie">
      <h1>Edit Movie Details</h1>
      <form onSubmit={editTheMovie}>
        Name:            <input type='text' name='name' id='name' placeholder="Enter Name" defaultValue={data.name} /><br />
        Image:     <input type='text' name='image' placeholder="Enter Image URl" id='image' defaultValue={data.image} /><br />
        Hero Name:       <input type='text' name='hero' id='hero' placeholder="Enter Hero name" defaultValue={data.hero} /><br />
        Director Name:   <input type='text' name='director' id='director' placeholder="Enter Director name" defaultValue={data.director} /><br />
        Language:        <input type='text' name='language' placeholder="Enter Language" id='language' defaultValue={data.language} /><br />
        Release:         <input type='text' name='release' placeholder="Enter Release info" id='release' defaultValue={data.release} /><br />
        Completed:<input type='checkbox' name='complete' defaultChecked={data.complete} /> <br />
        &nbsp;
        <input className="button tertiary" type='submit' /> &nbsp;  &nbsp;
        <button className="button tertiary" onClick={() => { nav('/') }}>Back to Movies</button>
      </form>
    </div>
  )
}