import React ,{useState}from 'react';
import coverPic from '../assets/cover-pic.jpg'
import { Link } from 'react-router-dom';

const  CaptainLogin= () => {
    const[email ,setEmail] = useState('')
    const [password ,setPassword] = useState('')
    const [CapData ,setCapUserData] =useState({})
    const submitHandler = (e) =>{
        setCapUserData({email:email , password:password})
        console.log(CapData);
        setEmail('')
        setPassword('')
    }
    return (
      <>
       {/* <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
            <img className='w-16 mb-8' src={logo} />
            <form onSubmit={(e)=>submitHandler(e)}>
                <h3 className='text-lg font-medium mb-2'>What's your email</h3>
                <input 
                  required
                  value={email}
                  onChange={(e)=>{
                    setEmail(e.target.value)
                  }}
                  className='bg-[#eeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                  type='email'
                  placeholder='email@example.com'
                />

                <h3 className='text-lg font-medium mb-2' >Enter Password</h3>

                <input 
                required 
                value={password}
                  onChange={(e)=>{
                    setPassword(e.target.value)}}
                type='password'
                placeholder='password'
                className='bg-[#eeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                />
                <button
                  className='bg-[#27239e] text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                >Login</button>
                <p className='text-center' >Be the Treval Mate?<Link to='/captain-signup' className='text-green-500'>Register as captain</Link></p>
            </form>
            </div>
        </div> */}

 <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl mt-10">
  <img className=" bg-cover m:block lg:w-1/2"  src={coverPic} />
<div className="w-full px-6 py-8 md:px-8 lg:w-1/2 mt-40">
    <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
        Welcome back!
    </p>

    <span className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
    </span>
    <form onSubmit={(e)=>submitHandler(e)}>
    <div className="mt-4">
        <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="LoggingEmailAddress">Email Address</label>
        <input 

         required
                  value={email}
                  onChange={(e)=>{
                    setEmail(e.target.value)
                  }} 
        class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" 
        placeholder='email@example.com'
        type="email" />
    </div>

    <div class="mt-4">
        <div class="flex justify-between">
            <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="loggingPassword">Password</label>
            <Link class="text-xs text-gray-500 dark:text-gray-300 hover:underline">Forget Password?</Link>
        </div>

        <input 
        required 
        value={password}
           onChange={(e)=>{
                    setPassword(e.target.value)}}
                type='password'
                placeholder='password       '        

        class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" />
    </div>

    <div class="mt-6">
        <button class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
            Sign In
        </button>
    </div>

    <div class="flex items-center justify-between mt-4">
        <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

        <Link to='/captain-signup' class="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline">or sign up</Link>
        <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
    </div>
    </form>
</div>
</div>
</>
    );
}

export default CaptainLogin;