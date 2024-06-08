import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

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

    return ()=> unsubscribe();
  }, []);


  return (
    <div className="flex justify-between p-3 absolute z-10 w-full h-[10vh] bg-gradient-to-b from-black">
      <img className="w-40" src={LOGO} alt="logo" />

      {/* load only when the user is logged in  */}
      {user && (
        <div className="flex">
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