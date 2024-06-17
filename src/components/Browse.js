import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {

  useNowPlayingMovies(); // calling hook containing nowPlayingMovies fetch api logic
  usePopularMovies(); // calling hook containing popularMovies fetch api logic

  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

  return (
    <div>
      <Header />
      
      {/* show diffrent gptSearch page if its value is true else other */}
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

    </div>
  )
}

export default Browse;