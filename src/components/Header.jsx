import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constant';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);

  const handleSignout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate('/error');
    });
  }

  useEffect(()=>{
    const unsubscribed = onAuthStateChanged(auth, (user) => {
        if (user) {
            const {uid, email, displayName, photoURL} = user;
            dispatch(addUser({uid:  uid, email: email, displayName: displayName, photoURL: photoURL}));
            navigate('/browse');
        } else {
            // User is signed out
            dispatch(removeUser())
            navigate('/');
        }
    });
    return () => unsubscribed();
},[])
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-44' src={LOGO} alt="Logo" />
        {
          user && (
            <div className='flex p-4'>
              <img className='w-12 h-12' src={user?.photoURL} alt="user-icon" />
              <button className='px-4 font-bold' onClick={handleSignout}>SIgn Out</button>
            </div>
          )
        }
    </div>
  )
}

export default Header