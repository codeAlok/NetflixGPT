import { Login_BG } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
    return (
        <div>
            <div className="absolute opacity-80 w-full -z-10">
                <img className="w-full h-[100vh] object-cover" src={Login_BG} alt="bg_img" />
            </div>

            <GptSearchBar />
            <GptMovieSuggestions />
        </div>
    )
}

export default GptSearch;