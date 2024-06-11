import { useSelector } from "react-redux"
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {

    const movies = useSelector(store => store.movies?.nowPlayingMovies);

    // return if initially no movies present in store
    if (movies === null) return;

    const mainMovies = movies[0];
    const { original_title, overview, id } = mainMovies;

    return (
        <div className="h-[100vh]">
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id}/>
        </div>
    )
}

export default MainContainer