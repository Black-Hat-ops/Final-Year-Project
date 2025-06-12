import React from 'react';
import map from '../assets/map.png'
import car from '../assets/uber-car.png'

const Riding = (props) => {
    return (
        <div className='h-screen flex-col' >
            <div className='h-1/2'>
                <img className='h-full w-full object-cover' src={map} alt="" />
                <div className='flex gap-2 justify-between flex-col items-center'>
                <img  className='h-28' src={car} alt="" />
                <div className='w-full mt-5'>
                    <div className='flex flex-col items-center gap-5 p-3 border-b-2'>

                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3> 
                            <p className='text-sm mt-1 text-gray-600'>Gujranwala, City</p>
                        </div>
                        <div className='flex items-center gap-5'>

                        <div>
                            <h3 className='text-lg font-medium'>324</h3>
                            <p className='text-sm mt-1 text-gray-600'>On Cash</p>
                        </div>
                        </div>
                    
                    </div>
                </div>

            </div>
            </div>
            <div className='h-1/2'>
                <button className='w-full mt-80 bg-green-600 text-white font-semibold p-2 rounded-lg' >Make a Pay</button>
            </div>
        </div>
    );
}
export default Riding;