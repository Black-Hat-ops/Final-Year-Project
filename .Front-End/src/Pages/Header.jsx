import React from 'react';
//import cover from '../assets/muneer-ahmed-ok-JBNUHqZNJv4-unsplash.jpg'
import logo from '../assets/logoImage.png'
import { Link } from 'react-router-dom';

const Start = ()=> {
    return (
        <div >
            {/*header*/}
<header class="text-gray-600 body-font bg-white">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <span class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <img className='w-16 ' src={logo} />
      <span class="ml-3 text-xl">AL-BuraQ</span>
    </span>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link to='/Home' className="mr-5 text-black-900">Ride Booking</Link>
      <Link to='/Captain-home' class="mr-5 hover:text-black-900">Be A Captain</Link>
      <Link to='/AI-trip' class="mr-5 hover:text-black-900">Tour Planer</Link>
      <Link to='/about' class="mr-5 hover:text-black-900">About</Link>
    </nav>
      <Link class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" to='/Singn-up'>Sign-Up</Link>
  </div>
</header>
            {/*bg-[#7798df]------------
            <div  className='Home-Cover bg-center bg-cover h-screen pt-8 flex justify-between mt-2 flex-col w-full ' >         
                <img className='w-16 ml-8' src={logo} />
                <div className='s bg-white mt-5 pb-7 py-4 px-5 gap-2' >
                    <h2 className='text-3xl font-bold ' >Get Started With Al-Buraq</h2>
                    <Link to='/login' className='flex items-center justify-center w-full bg-[#27239e] text-white py-3 rounded mt-5'>Continue</Link>
                    <Link to='/Home' className='flex items-center justify-center w-full bg-[#27239e] text-white py-3 rounded mt-5'>Home</Link>
                    <Link to='/captain-home' className='flex items-center justify-center w-full bg-[#27239e] text-white py-3 rounded mt-5'>Captain Home</Link>
                </div>
            </div>--*/}
        </div>
    );
}

export default Start;