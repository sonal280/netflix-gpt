import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import {createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { USER_AVTAR } from '../utils/constant';

const Login = () => {
    const [IsSignInForm, setIsSignInForm] = useState(true);
    const [errorMsg, seterrorMsg] = useState(null);
    const[name, setname] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleFormValidation = () => {
        const message = checkValidData(nameRef,emailRef,passwordRef);
        seterrorMsg(message);

        if(message) return ;

        if(!IsSignInForm){
            createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(user, {
                displayName: nameRef.current.value, photoURL: USER_AVTAR
                }).then(() => {
                    const {uid, email, displayName, photoURL} = auth.currentUser;
                    dispatch(addUser({uid:  uid, email: email, displayName: displayName, photoURL: photoURL}));
                    navigate('/browse');
                }).catch((error) => {
                    seterrorMsg(error);
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                seterrorMsg(errorCode+ " - " +errorMessage);
                navigate('/');

            });
        }else{
            signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigate('/browse');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                seterrorMsg(errorCode+ " - " +errorMessage);
                navigate('/');
            });
        }
    }

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
                <form onSubmit={(e)=>{e.preventDefault()}} action="" className='absolute p-12 bg-black w-3/12 my-24 mx-auto right-0 left-0 opacity-90'>
                    <h1 className='font-bold text-3xl py-4'>{IsSignInForm ? 'Sign In' : 'Sign Up'}</h1>
                    {!IsSignInForm && (
                         <input 
                         ref={nameRef}
                         type="text" 
                         placeholder='Full Name' 
                         className='p-2 my-2 w-full bg-gray-800' 
                         onChange={(e)=>{setname(e.target.value)}}/>
                    )}
                    <input 
                        ref={emailRef}
                        type="text" 
                        placeholder='Email Address' 
                        className='p-2 my-2 w-full bg-gray-800' />
                    <input 
                        ref={passwordRef}
                        type="password" 
                        placeholder='Password'  
                        name="" 
                        id="" 
                        className='p-2 my-2 w-full bg-gray-800'/>
                    <p className='text-red-500 font-bold text-lg py-2'>{errorMsg}</p>
                    <button className='p-4 my-4 bg-red-700 w-full' onClick={handleFormValidation}>{IsSignInForm ? 'Sign In' : 'Sign Up'}</button>
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