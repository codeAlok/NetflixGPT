import { useSelector } from "react-redux";
import lang from "../utils/languageConstant";

const GptSearchBar = () => {
    const langKey = useSelector(store => store.config.lang);

    return (
        <div className="pt-28">
            <form className="p-6 bg-black">
                <input type="text" className="p-2 w-[80%]" placeholder={lang[langKey].gptSearchPlaceholder} />
                <button className="px-4 p-2 m-4 bg-red-600 text-white font-bold">
                    {lang[langKey].search}
                </button>
            </form>
        </div>
    )
}

export default GptSearchBar;