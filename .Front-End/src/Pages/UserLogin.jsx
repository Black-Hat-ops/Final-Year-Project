import React ,{useState}from 'react';
import logo from '../assets/logoImage.png'
import { Link } from 'react-router-dom';

const UserLogin = () => {
    const[email ,setEmail] = useState('')
    const [password ,setPassword] = useState('')
    const [userData ,setUserData] =useState({})
    const submitHandler = (e) =>{
        setUserData({email:email , password:password})
        console.log(userData);
        setEmail('')
        setPassword('')
    }
    return (
        <div className=' p-7 h-screen flex flex-col justify-between'>
            <div>
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
                <p className='text-center' >New Mate?<Link to='/signup' className='text-green-500'>Create New Account</Link></p>
            </form>
            </div>
        </div>
    );
}

export default UserLogin;