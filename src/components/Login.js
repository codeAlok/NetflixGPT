import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div className="w-[100%] h-[100vh] bg-black border-2 border-red-500">
      <Header />

      <div className="absolute opacity-70">
        <img className="w-[100%] h-[100vh]" src="https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="bg_img" />
      </div>

      <form className="w-[30%] absolute bg-black bg-opacity-40 mt-20 p-10 left-0 right-0 mx-auto">
        <h1 className="text-white text-3xl font-bold mb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full name"
            className="p-3 outline-white mb-4 w-full bg-gray-500 text-white rounded"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-3 outline-white mb-4 w-full bg-gray-500 text-white rounded"
        />
        <input
          type="password"
          placeholder="password"
          className="p-3 outline-white mb-4 w-full bg-gray-500 text-white rounded"
        />

        <button className="w-full p-2 mt-4 bg-red-600 text-white font-bold rounded ">
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