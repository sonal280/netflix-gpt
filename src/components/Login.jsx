import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [IsSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!IsSignInForm)
    } 
  return (
    <div>
        <Header/>
            <div className='absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fbf440b2-24a0-49f5-b2ba-a5cbe8ea8736/web/IN-en-20250324-TRIFECTA-perspective_d7c906ec-0531-47de-8ece-470d5061c88a_large.jpg" alt="" />
            </div>
            <div>
                <form action="" className='absolute p-12 bg-black w-3/12 my-24 mx-auto right-0 left-0 opacity-90'>
                    <h1 className='font-bold text-3xl py-4'>{IsSignInForm ? 'Sign In' : 'Sign Up'}</h1>
                    {!IsSignInForm && (
                         <input 
                         type="text" 
                         placeholder='Full Name' 
                         className='p-2 my-2 w-full bg-gray-800' />
                    )}
                    <input 
                        type="text" 
                        placeholder='Email Address' 
                        className='p-2 my-2 w-full bg-gray-800' />
                    <input 
                        type="password" 
                        placeholder='Password'  
                        name="" 
                        id="" 
                        className='p-2 my-2 w-full bg-gray-800'/>
                    <button className='p-4 my-4 bg-red-700 w-full'>{IsSignInForm ? 'Sign In' : 'Sign Up'}</button>
                    <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
                        {IsSignInForm 
                        ? 'New to Netflix? Sign Up Now' 
                        : 'Already registered? Sign In Now'}
                    </p>
                </form>
            </div>
    </div>
  )
}

export default Login