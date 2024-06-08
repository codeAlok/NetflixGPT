import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const Browse = () => {

  useNowPlayingMovies(); // calling hook containing nowPlayingMovies fetch api logic

  return (
    <div>
      <Header />
    </div>
  )
}

export default Browse;