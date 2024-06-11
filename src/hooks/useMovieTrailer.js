import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    // **** fetching videos related data from TMDB movies section under MovieLists ****
    const getMovieVideo = async () => {
        const data = await fetch(
            'https://api.themoviedb.org/3/movie/'+ movieId +'/videos?language=en-US',
            API_OPTIONS
        );

        const json = await data.json();
        const filterData = json.results.filter((video) => video.type === "Trailer");

        // if no trailer , then pick the first result video(it may be clip, teaser...)
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
    }

    useEffect(() => {
        getMovieVideo();
    }, []);
}

export default useMovieTrailer;