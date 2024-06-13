import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-[200px]">
      <img src={IMG_CDN_URL + posterPath} alt="Movie card" className="w-full"/>
    </div>
  )
}

export default MovieCard;