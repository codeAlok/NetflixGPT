import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }

  useEffect(() => {
    // ** from firebase auth->manage_users
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL: photoURL
        }));

        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    // toggle gptSearchView using redux
    dispatch(toggleGptSearchView());
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className="flex justify-between p-3 absolute z-10 w-full h-[10vh] bg-gradient-to-b from-black">
      <img className="w-40" src={LOGO} alt="logo" />

      {/* load only when the user is logged in  */}
      {user && (
        <div className="flex">

          {/* lang_option show only if we are on searchGpt page */}
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-600 text-white cursor-pointer"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map(lang =>
                <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
              )}
            </select>
          )}

          <button
            className="py-2 px-4 m-2 text-white font-bold bg-gray-400 rounded-3xl"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home page" : "GPT Search"}
          </button>

          <img className="w-12 rounded-full" src={user.photoURL} />

          <button
            onClick={handleSignOut}
            className="text-white text-xl font-bold"
          >[Sign out]</button>
        </div>
      )}

    </div>

  );
}

export default Header 