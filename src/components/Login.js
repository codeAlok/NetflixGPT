import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVTR, Login_BG } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  // **** validate form data ****
  const handleButtonClick = () => {
    // console.log(email);  // gives a object containing value & other data1

    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return; // return if any error

    // *** Sign up , sign in authentication logic with firebase ***
    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;

          // ** updating profile **
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: USER_AVTR
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ' ' + errorMessage);
        });

    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ' ' + errorMessage);
        });
    }
  }

  return (
    <div className="w-[100%] h-[100vh] bg-black border-2 border-red-500">
      <Header />

      <div className="absolute opacity-70 w-full">
        <img className="w-full h-[100vh] object-cover" src={Login_BG} alt="bg_img" />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-[30%] absolute bg-black bg-opacity-40 mt-20 p-10 left-0 right-0 mx-auto"
      >
        <h1 className="text-white text-3xl font-bold mb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full name"
            className="p-3 outline-white mb-4 w-full bg-gray-500 text-white rounded"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-3 outline-white mb-4 w-full bg-gray-500 text-white rounded"
        />
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="p-3 outline-white mb-4 w-full bg-gray-500 text-white rounded"
        />

        <p className="text-red-500 font-semibold">{errorMessage}</p>

        <button
          className="w-full p-2 mt-4 bg-red-600 text-white font-bold rounded "
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}

        </button>

        <p className="text-gray-300 mt-4">
          {isSignInForm
            ? (<>
              New to Netflix? &nbsp;
              <span
                className="text-white font-bold cursor-pointer hover:underline"
                onClick={toggleSignInForm}
              >Sign up now</span>
            </>)
            : (<>
              Already registered? &nbsp;
              <span
                className="text-white font-bold cursor-pointer hover:underline"
                onClick={toggleSignInForm}
              >Sign In now</span>
            </>)
          }
        </p>
      </form>

    </div>
  )
}

export default Login;