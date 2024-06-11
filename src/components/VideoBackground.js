import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants"

const VideoBackground = ({ movieId }) => {

  const [trailerKey, setTrailerKey] = useState(null);

  // **** fetching videos related data from TMDB movies section under MovieLists ****
  const getMovieVideo = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/653346/videos?language=en-US', API_OPTIONS);

    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");

    // if no trailer , then pick the first result video(it may be clip, teaser...)
    const trailer = filterData.length ? filterData[0] : json.results[0];
    console.log(trailer);
    setTrailerKey(trailer.key);
  }

  useEffect(() => {
    getMovieVideo();
  }, []);

  return (
    <div>
      {/* taking iframe from embed code of youtube in share button (because the api provide yt_vd_key for trailer...) */}
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + trailerKey}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  )
}

export default VideoBackground