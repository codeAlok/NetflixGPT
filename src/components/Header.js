import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }


  return (
    <div className="flex justify-between p-3 absolute z-10 w-full h-[10vh] bg-gradient-to-b from-black">
      <img className="w-40" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />

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