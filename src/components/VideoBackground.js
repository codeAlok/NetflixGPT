import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);

  useMovieTrailer(movieId); // hook for fetching & updating movie trailer

  return (
    <div className="w-screen">
      {/* taking iframe from embed code of youtube in share button (because the api provide yt_vd_key for trailer...) */}
      <iframe
        className="w-screen h-screen aspect-video "
        src={"https://www.youtube.com/embed/" + trailerVideo?.key  }
        // + "?&autoplay=1&mute=1"  (append this at last in src for autoplay & mute audio)
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  )
}

export default VideoBackground