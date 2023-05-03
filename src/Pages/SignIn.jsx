import React, { useState } from 'react'
// import loginImg from '../assets/img4.jpg'

export default function SignIn() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleUserNameChange = (event) => {   
    setUserName(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('User Name:', userName);
    console.log('Password:', password);
  }

  return (
    
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
    <div className='hidden sm:block'>
    {/* <img className='w-full h-full object-cover' src={loginImg}  alt=""/> */}
    </div>

    <div className='bg-gray-800 flex flex-col justify-center' >
    <form className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg' onSubmit={handleSubmit}>
    <h2 className='text-4xl dark:text-white font-bold text-center'>SIGN IN</h2>
    <div className='flex flex-col text-gray-400 py-2'><label>User Name</label>
    <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" value={userName} onChange={handleUserNameChange}/>
    </div>
    

    <div className='flex flex-col text-gray-400 py-2'>
    <label>Password</label>
    <input className= 'rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type='password' value={password} onChange={handlePasswordChange}/></div>

    <div className='flex justify-between text-gray-400 py-2'>
    <p className='flex items-center'><input className='mr-2' type="checkbox"/>Remember Me</p>
    <p>Forgot Password</p>
    </div>

    <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>Sign In</button>

    </form>
    </div>
    </div>
  )
}
