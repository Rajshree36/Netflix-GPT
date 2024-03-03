import React, { useRef, useState } from 'react'
import Header from "./Header"
import { checkValidData} from '../Utils/validate'
import { createUserWithEmailAndPassword ,  signInWithEmailAndPassword } from "firebase/auth";
import  {auth} from "../Utils/firebase";
import { useNavigate } from 'react-router-dom';

const Login = () => {
 const [isSignInForm,setIsSignInForm] =useState(true);
 const [errorMessage,setErrorMessage] =useState(null);
 const navigate =useNavigate();
 
 const email = useRef(null);
 const password = useRef(null);


 const handleButtonClick = () => {
  console.log(email.current.value);
  console.log(password.current.value);
    const message = checkValidData(email.current.value,password.current.value);
    setErrorMessage(message);
    if(message) return;

    //sign In/Sign up logic
    if(!isSignInForm){
//sign up logic
createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    navigate("/browse");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+ "-" + errorMessage);
  });
    }
    else{
      //Sign in logic
      signInWithEmailAndPassword(auth, email.current.value,password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/browse");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+ "-" + errorMessage);
      });
    
    }

 
   } 

    const toggleSignInForm =() => {
setIsSignInForm(!isSignInForm);
    }

  return (
    <div>
        <Header />
        <div className='absolute'>
      <img  src='https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt='Logo' />
      </div>
        <form onSubmit={(e)=> e.preventDefault()} className= 'bg-black absolute opacity-80 p-12 w-4/12 my-36 mx-auto right-0 left-0 text-white rounded-lg'>
            <h1 className='font-bold text-3xl w-full'> {isSignInForm ? "Sign In" :"Sign Up"}</h1>

{!isSignInForm && (<input type="text"  placeholder='Name' className='p-4 my-4 bg-gray-700 w-full '/>)}
            <input type="text" ref={email} placeholder='Email address' className='p-4 my-4 bg-gray-700 w-full '/>
            <input type="password" ref={password} placeholder='Password' className='p-4 my-4 bg-gray-700 w-full '/>
            <p className='text-red-500  font-bold text-lg py-3'>{errorMessage}</p>
            <button className='p-4 my-6 bg-red-700 w-full rounded-lg font-bold' onClick={handleButtonClick}>
                {isSignInForm ? "Sign In" :"Sign Up"}
            </button>
   <p className='cursor-pointer py-4 ' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix?Sign up Now":"Already registered? Sign In Now."}</p>
        </form>
    </div>
   
  )
}

export default Login
