import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();

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

  return (
    <div className="flex justify-between p-3 absolute z-10 w-full h-[10vh] bg-gradient-to-b from-black">
      <img className="w-40" src={LOGO} alt="logo" />

      {/* load only when the user is logged in  */}
      {user && (
        <div className="flex">
          <button 
            className="py-2 px-4 m-2 text-white font-bold bg-gray-400 rounded-3xl"
            onClick={handleGptSearchClick}
          >
            GPT Search
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