import React, { useState } from 'react'
import Header from "./Header"

const Login = () => {
 const [isSignInForm,setIsSignInForm] =useState(true)

    const toggleSignInForm =() => {
setIsSignInForm(!isSignInForm);
    }

  return (
    <div>
        <Header />
        <div className='absolute'>
      <img  src='https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt='Logo' />
      </div>
        <form className= 'bg-black absolute opacity-80 p-12 w-4/12 my-36 mx-auto right-0 left-0 text-white rounded-lg'>
            <h1 className='font-bold text-3xl w-full'> {isSignInForm ? "Sign In" :"Sign Up"}</h1>

{!isSignInForm && (<input text="text" placeholder='Name' className='p-4 my-4 bg-gray-700 w-full '/>)}
            <input text="text" placeholder='Email address' className='p-4 my-4 bg-gray-700 w-full '/>
            <input text="password" placeholder='Password' className='p-4 my-4 bg-gray-700 w-full '/>
            <button className='p-4 my-6 bg-red-700 w-full rounded-lg font-bold'>
                {isSignInForm ? "Sign In" :"Sign Up"}
            </button>
   <p className='cursor-pointer py-4 ' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix?Sign up Now":"Already registered? Sign In Now."}</p>
        </form>
    </div>
   
  )
}

export default Login
