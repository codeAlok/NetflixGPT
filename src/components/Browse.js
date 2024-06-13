import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";

const Browse = () => {

  useNowPlayingMovies(); // calling hook containing nowPlayingMovies fetch api logic
  usePopularMovies(); // calling hook containing nowPlayingMovies fetch api logic

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse;