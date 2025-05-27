import axios from "axios"
import { useEffect, useState } from "react"


export default function MovieList() {
    const apiKey = import.meta.env.VITE_API_KEY;
    const [movies, setMovies] = useState([])


        useEffect(() => {
          async function fetchMovies() {
            try {
              const response = await axios.get("https://api.themoviedb.org/3/discover/movie", {
                params: { api_key: apiKey  },

              });
              const sortedMovies = response.data.results.sort((a, b) =>
              new Date(b.release_date) - new Date(a.release_date));


              setMovies(sortedMovies)
              console.log(sortedMovies)
            } catch (err) {
              console.error("Error:", err)
            }
          }
          fetchMovies()
        }, [])
                // FIX: Try to sort by revenue, but there is not revenue in the api object,
                // may have to make two API calls.
                // Or just do top ten most popular movies
    return(
        <>
            {movies.map((movie => (
                <p key = {movie.id}>{movie.original_title} {movie.release_date}</p>
            )))}
        </>
    )
}