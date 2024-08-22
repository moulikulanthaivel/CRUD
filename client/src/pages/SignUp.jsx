import { useState } from "react"
import {Link} from "react-router-dom"

export default function SignUp() {
const [formData , setFromdata] = useState({});
const [error, setError] = useState(false);
const [loading , setLoading] = useState(false)
const handleChanger = (e)=>{
  setFromdata({...formData, [e.target.id]:e.target.value});
};


 const handleSubmit = async (e)=>{
    e.preventDefault();

    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method:'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if(data.success === false){
        setError(true);
        return;
      }
    } catch (error) {
      setLoading(false);
      setError(true);
    }

    
 };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-center text-3xl font-semibold my-7'>Sign Up</h1>

      <form   onSubmit={handleSubmit}  className='flex flex-col gap-4 '>
        <input type="text" placeholder='Username' id='username' className='bg-slate-100 p-3 rounded-lg'
        onChange={handleChanger}/>
        <input type="email" placeholder='Email' id='email' className='bg-slate-100 p-3 rounded-lg'
         onChange={handleChanger}/>
        <input type="password" placeholder='Password' id='password' className='bg-slate-100 p-3 rounded-lg' onChange={handleChanger}/>
        <button className=' bg-slate-700 p-3 rounded-lg uppercase text-white hover:opacity-90 disabled:opacity-80' onChange={handleChanger}> {loading ? "loading..." : 'sign Up' } </button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to="/sign-in">
        <span className='text-blue-500'>Sign In</span>
        </Link>
      </div>
      <p className="text-red-800 mt-5">{error && "something went wrong"}</p>
    </div>
  )
}
