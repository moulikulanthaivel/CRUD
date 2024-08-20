import React from 'react'

export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-center text-3xl font-semibold my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4 '>
        <input type="text" placeholder='Username' id='username' className='bg-slate-100 p-3 rounded-lg'/>
        <input type="email" placeholder='Email' id='email' className='bg-slate-100 p-3 rounded-lg'/>
        <input type="password" placeholder='Password' id='password' className='bg-slate-100 p-3 rounded-lg'/>
        <button className='disa  bg-slate-700 p-3 rounded-lg uppercase text-white hover:opacity-90 disabled:opacity-80'>sign up</button>
      </form>
    </div>
  )
}
