import React,{useState,useRef} from "react";
import Header from "./Header";
import { checkValidate } from "../Utils/Validate";

const Login = () => {
    const [isSignInForm,setIsSignInForm] = useState(true);
    const [errorMessage,setErrorMessage] = useState(null);
    const fullName = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }

    const handleFormData = () => {
       const message =  checkValidate(email.current.value,password.current.value);
       setErrorMessage(message);
    }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>

      <form onSubmit={(e)=> e.preventDefault()} className="absolute bg-black w-3/12 my-36 mx-auto right-0 left-0 rounded bg-opacity-80 p-12 text-white">
        <h1 className="font-bold text-3xl py-4 px-2"> {isSignInForm ? 'Sign In':'Sign up'}</h1>
        {!isSignInForm && <input
        ref={fullName}
          className="w-full p-2 my-4 bg-gray-700"
          type="text"
          placeholder="Full Name"
        />}
        <input
        ref={email}
          className="w-full p-2 my-4 bg-gray-700"
          type="email"
          placeholder="Enter an Email Address"
        />
        <input
        ref={password}
          className="w-full p-2 my-4 bg-gray-700"
          type="password"
          placeholder="Password"
        />
        <p>{errorMessage}</p>
        <button
          className="bg-red-700 text-xl w-full p-2 my-4 rounded"
          onClick={handleFormData}
        >
         {isSignInForm ? 'Sign In':'Sign up'}
        </button>
        <p onClick={toggleSignInForm}> {isSignInForm ? 'New to Netflix? Sign up now.':'Already registered. Sign In Now.'}</p>
      </form>
      
    </div>
  );
};

export default Login;
