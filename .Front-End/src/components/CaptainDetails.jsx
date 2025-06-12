import React from 'react';
import timer from '../assets/Icons/timer-2-line.png'
import speed from '../assets/Icons/speed-up-fill.png'
import wallet from '../assets/Icons/wallet-3-line.png'
import dp from '../assets/file.jpg'

function CaptainDetails(props) {
    return (
      <div className='h-2/5 p-6'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center justify-between gap-3'>
           <img className='h-16 w-16 rounded-full object-cover' src={dp} alt="" />
           <h4 className='text-lg font-medium ' >Qasim Shah</h4>
        </div>
        <div>
           <h4 className='text-xl font-semibold' >250.20/- </h4>
           <p className='text-sm bg-gray-400'>Earned</p>
        </div>                 
      </div>
      <div className='flex p-3 bg-gray-50 rounded-xl justify-center mt-7 gap-5 items-start'>
        <div className='text-center'>
         <img className='text-3xl font-thin' src={timer} alt="" />
         <h5 className='text-lg font-medium' >10.2</h5>
         <p className='text-sm text-gray-600'>Hours Online</p>
        </div>
        <div className='text-center'>
         <img className='text-3xl font-thin' src={speed} alt="" />
         <h5 className='text-lg font-medium' >10.2</h5>
         <p  className='text-sm text-gray-600'>Hours Online</p>
        </div>
        <div className='text-center' >
         <img className='text-3xl font-thin' src={wallet} alt="" />
         <h5 className='text-lg font-medium'>10.2</h5>
         <p  className='text-sm text-gray-600'>Hours Online</p>
        </div>
      </div>
     <div className='flex gap-2 justify-between flex-col items-center'>

     </div>
   
   </div>
    );
}

export default CaptainDetails;