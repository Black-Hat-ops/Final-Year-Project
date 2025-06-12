import React from 'react';

function FinishRide(props) {
    return (
        <div className='w-72'>
            <h5 className='p-1 text-center w-[93%] absolute top-0'  onClick={() => {

            } }>Close</h5>
            <h3  className='text-2xl font-semibold mb-5' >Finish this Ride</h3>
            <div className='flex items-center justify-between p-4 border-2 border-yellow-400 rounded-lg mt-4'>
                <div className='flex items-center gap-3 '>
                    <img className='h-12 rounded-full object-cover w-12' src="" alt="" />
                    <h2 className='text-lg font-medium' >Ali Hasan</h2>
                </div>
                <h5 className='text-lg font-semibold' >2.2 Km</h5>
            </div>
            <div className='flex gap-2 justify-between flex-col items-center'>
                <div  className='w-full mt-5' >
                <div className='flex items-center gap-5 p-3 border-b-2'>
                        <h5>fefe</h5>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>lahore</p>
                        </div>
                    </div> 
                    <div className='flex items-center gap-5 p-3 border-b-2' >
                        <h5>fff</h5>
                        <div>
                            <h3 className='text-lg font-medium' >562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Gujrat</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h5>dsd</h5>
                    <div>
                        <h3 className='text-lg font-medium'>Rs /-</h3>
                        <p className='text-sm -mt-1 text-gray-600'>Cash</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FinishRide;