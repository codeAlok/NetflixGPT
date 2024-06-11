import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    // *** TMDB API CALL ***
    const getNowPlayingMovies = async () => {
        const data = await fetch(
            'https://api.themoviedb.org/3/movie/now_playing?page=1',
            API_OPTIONS
        );

        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
        console.log(json.results);
    }

    useEffect(() => {
        getNowPlayingMovies();
    }, []);
}

export default useNowPlayingMovies;