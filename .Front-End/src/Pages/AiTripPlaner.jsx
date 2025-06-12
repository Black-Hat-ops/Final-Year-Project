import React from 'react';
import { SelectBudgetOptions, SelectTraveleList } from '../components/AiOption'

const  AiTripPlaner = (props) => {
    return (
        <div>
            <div className='sm:px-10 md:px-32 xl:px-72 px-5 mt-10'>
                <h2 className='font-bold text-3xl'># Tell us your travel Prefrences</h2>
                <h3 className='mt-3 text-gray-500 text-xl'>Just Provide information, and our trip planner will genrate a customized iyninerary based on your prefrences</h3>

                <div className='mt-20 flex flex-col gap-9'>
                    <div>
                        <h2 className='text-xl my-3 font-medium'>What is your destination choice?</h2>
                        <input type="text" />
                    </div>

                    <div>
                        <h2 className='text-xl my-3 font-medium'>How many days you are planning </h2>
                        <input 
                        placeholder={'ex.3'}
                        type="number" />
                    </div>
                </div>
                <div>
                    <h2 className='text-xl my-3 font-medium'>What is Your Budget?</h2>
                    <div className='grid grid-cols-3 gap-5 mt-5'>
                        {SelectBudgetOptions.map((item,index) => (
                            <div key={index} className='p-4 border rounded-lg hover:shadow'
                         >
                            <h2 className='text-4xl'>{item.icon}</h2>
                            <h2 className='font-bold text-lg'>{item.title}</h2>
                            <h2 className='text-sm text-gray-500'>{item.desc}</h2>
                         </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className='text-xl my-3 font-medium'>Who do you plan on traveling with ?</h2>
                    <div className='grid grid-cols-3 gap-5 mt-5'>
                        {SelectTraveleList.map((item,index) => (
                            <div key={index} className='p-4 border rounded-lg hover:shadow'
                         >
                            <h2 className='text-4xl'>{item.icon}</h2>
                            <h2 className='font-bold text-lg'>{item.title}</h2>
                            <h2 className='text-sm text-gray-500'>{item.desc}</h2>
                         </div>
                        ))}
                    </div>
                </div>
                
                <div className='my-10 justify-end flex'>
                    <button>Generate Tripe</button>
                </div>
            </div>
        </div>
    );
}

export default AiTripPlaner;