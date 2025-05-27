import axios from "axios"
import { useEffect, useState } from "react"


export default function MovieList() {
    const apiKey = import.meta.env.VITE_API_KEY;
    const [movies, setMovies] = useState([])
    const [year, setYear] = useState(2025)

        // UseEffect for API and movie state
        useEffect(() => {
          async function fetchMovies() {
            try {
              const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=${year}&region=US&sort_by=revenue.desc&with_origin_country=US&with_original_language=en&with_release_type=2|3`, {
                params: 
                { api_key: apiKey },
                
              });
        
              setMovies(response.data.results)
              console.log(response.data.results)
            } catch (err) {
              console.error("Error:", err)
            }
          }
          fetchMovies()
        }, [year])
                
    return(
        <>

            <label htmlFor="year-select">Choose a year:</label>
                <input
                    type="number"
                    id="year-select"
                    value={year}
                    onChange={(e) => setYear(e.target.value)} 
            />


            {movies.map((movie => (
                <div key = {movie.id}>
                        
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />

                    <h2>{movie.original_title}</h2> 
                    <h3>{movie.release_date}</h3>
                
                </div>
            )))}
        </>
    )

    
}