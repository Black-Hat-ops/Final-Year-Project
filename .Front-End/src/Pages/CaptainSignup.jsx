import React ,{useState}from 'react';
import logo from '../assets/Buraq.jpg'
import { Link } from 'react-router-dom';

const CaptainSignup = () => {
    const[email ,setEmail] = useState('')
    const [password ,setPassword] = useState('')
    const [fname , setfname] = useState(' ')
    const [Lname , setLname] = useState(' ')
    const [LicenceNumber , setLicenceNumber] = ('')
    const [CNIC , setCNIC] = ('')

    const [capData ,setCaprData] =useState({})


    const submitHandler = (e) =>{
        e.preventDefault()
        setCaprData(
            {
            fname : fname,
            Lname : Lname, 
            CNIC  : CNIC,
            LicenceNumber : LicenceNumber ,   
            email:email ,
            password:password
        })
        console.log(capData);
        setEmail('')
        setPassword('')
        setfname('')
        setLname('')
        setLicenceNumber(' ')
        setCNIC(' ')
    }
    return (
        <div className=' p-7 h-screen flex flex-col justify-between'>
            <div>
            <img className='w-16 mb-8' src={logo} />
            <form onSubmit={(e)=>submitHandler(e)}>

            <h3 className='text-lg font-medium mb-2 '>What's your Name</h3>
            
            
            <div className='flex gap-4 mb-6'>
                
            <input 
                  required
                  className='bg-[#eeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base'
                  type='Text'
                  placeholder='First-name'
                  value={fname}
                  onChange={(e)=>{setfname(e.target.value)}}

                />
                 <input 
                  required
                  className='bg-[#eeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base'
                  type='Text'
                  placeholder='Last-name'
                  value={Lname}
                  onChange={(e)=> { setLname(e.target.value) }}
                /> 
            </div>

            <div className='text-lg font-medium mb-2 '>CNIC</div>
            <input 
                  required
                  className='bg-[#eeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                  type='text'
                  placeholder='CNIC'
                  value={CNIC}
                  onChange={(e)=>{setCNIC(e.target.value)}}

                />
            <div className='text-sm font-medium  '>Lince no.</div>
            <input 
                  required
                  className='bg-[#eeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                  type='text'
                  placeholder='Licence Number'
                  value={LicenceNumber}
                  onChange={(e)=> { setLicenceNumber(e.target.value) }}
                />  

                <h3 className='text-base font-medium mb-2'>What's your email</h3>
                <input 
                  required
                  value={email}
                  onChange={(e)=>{
                    setEmail(e.target.value)
                  }}
                  className='bg-[#eeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                  type='email'
                  placeholder='email@example.com'
                />
              
                <h3 className='text-base font-medium mb-2' >Enter Password</h3>

                <input 
                required 
                value={password}
                  onChange={(e)=>{
                    setPassword(e.target.value)}}
                type='password'
                placeholder='password'
                className='bg-[#eeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                />
                <button
                  className='bg-[#27239e] text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                >Login</button>
                <p className='text-center' >Al-ready have account login?<Link to='/captain-login' className='text-green-500'>login</Link></p>
            </form>
            </div>
        </div>
    );
}

export default CaptainSignup;