import React from 'react';
import car from '../assets/uber-car.png'

const LookingForDriver = (props) => {
    return (
        <div>
             <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
                props.setVehicalePanel(false)
            }}></h5>
            <h3 className='text-2xl font-semibold mb-5' >Looking For Driver</h3>
            <div className='flex gap-2 justify-between flex-col items-center'>
                <img className='h-20' src={car} alt="" />
                <div className='w-full mt-5'>
                    <div className='flex items-center gap-5 p-3 border-b-2'>

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
    );
}

export default LookingForDriver;