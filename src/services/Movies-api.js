//All of our end points
import axios from "axios";
//const baseURL = "http://localhost:3000/movies";
const baseURL = "https://movies-9cxp.onrender.com/movies"
;
//Show all
export const getMovies = () =>{
    const URL = baseURL                //Our base url
    const response = axios.get(URL);  // using axios's get functionality to grab our Movies
    return response;
}

//Show one

export const getMovie =  (id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.get(URL)
    return response
}
//Edit the Movie

export const editMovie =async (id, updatedMovie) => {
    const URL = `${baseURL}/${id}`;
    const response = await axios.put(URL, updatedMovie);
    return response;
    }

//Create the Movie

export const createMovie = (createdMovie) => {
    const URL = baseURL;
    const response = axios.post(URL, createdMovie);
    return response;
}

//Delete the Movie

export const deleteMovie = (id) => {
    const URL = `${baseURL}/${id}`;
    const response = axios.delete(URL);
    return response;
}
