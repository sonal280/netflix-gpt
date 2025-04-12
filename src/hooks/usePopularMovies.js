import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";

const usePopularMovies = () => {
     // Fetch data from TMDB API & update store
    const dispatch = useDispatch();
    const getPopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular', API_OPTIONS);
        const json = await data.json();
       
        dispatch(addPopularMovies(json.results));
    }

    useEffect(()=>{
        getPopularMovies()
    }, [])
}

export default usePopularMovies