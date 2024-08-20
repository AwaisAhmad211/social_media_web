import React from 'react'
import {FcGoogle} from 'react-icons/fc';
import Video from '../assets/share.mp4';
import logo from '../assets/logowhite.png';
import GoogleLogin from 'react-google-login';



const Login = () => {
  return (
    <div className='relative flex items-center justify-start h-screen flex-col'>
       <video 
       src={Video}
       loop
       autoPlay
       muted
       controls={false}
       className='w-full h-full object-cover'
       />
       <div className='absolute w-full h-full bg-blackOverlay'>
         <div className='absolute flex flex-col bottom-0 left-0 right-0 top-0 items-center justify-center'>
          <img 
          src={logo} 
          alt="logo"
          width='130px'
          /> 
          <div>
            <GoogleLogin
              className='shadow-2xl'
              render={(renderProps)=> (
                <button
                type='button'
                className='flex items-center justify-center cursor-pointer m-4 bg-mainColor p-3 rounded-lg'
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                >
                <FcGoogle className='m-2'/>
                  Sign In with Google
                </button>
              )}
            />
          </div>
         </div> 
       </div>
    </div>
  )
}

export default Login
