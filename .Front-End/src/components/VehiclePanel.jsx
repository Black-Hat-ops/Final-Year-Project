import React from 'react';
import car from '../assets/uber-car.png'
import car2 from '../assets/uber-car2.jpg'
import bike from '../assets/uber-bike.jpg'
import auto from '../assets/uber-auto.jpg'

const VehiclePanel = (props) => {
    return (
        <div>
          <h5 className='p-1 text-center w-[93%] absolute top-0'onClick={() => {
                props.setVehiclePanel(false)
            }}>click</h5>
            <h3 className='text-2xl font-semibold mb-5' >Choose a Vehicle</h3>
                            <div
                              onClick={() =>{
                                props.setConfirmVehiclePanel(true)
                              }}
                            className='flex border-2 mb-2 active:border-black bg-gray-100 rounded-xl w-full p-3 items-center justify-between' >
                                <img className='h-10' src={car} alt="" />
                                <div className='ml-2 w-1/2'>
                                <h4 className='font-medium text-base' >Buraq Go <span></span> </h4>
                                <h5 className='font-medium text-sm'>2 min away</h5>
                                <p  className='font-normal text-sm text-gray-600' >Affordale, compact rides</p>
                                </div>
                                <h2 className='text-xl font-semibold' >193.20Rs</h2>
                            </div>
                            <div 
                             onClick={() =>{
                                props.setConfirmVehiclePanel(true)
                              }}
                            className='flex border-2 mb-2  active:border-black bg-gray-100 rounded-xl w-full p-3 items-center justify-between' >
                                <img className='h-10' src={car2} alt="" />
                                <div className='ml-2 w-1/2'>
                                <h4 className='font-medium text-base' >Buraq Go <span></span> </h4>
                                <h5 className='font-medium text-sm'>2 min away</h5>
                                <p  className='font-normal text-sm text-gray-600' >Affordale, compact rides</p>
                                </div>
                                <h2 className='text-xl font-semibold' >193.20Rs</h2>
                            </div>
                            <div 
                              onClick={() =>{
                                props.setConfirmVehiclePanel(true)
                              }}
                            className='flex border-2 mb-2  active:border-black bg-gray-100 rounded-xl w-full p-3 items-center justify-between' >
                                <img className='h-10' src={bike} alt="" />
                                <div className='ml-2 w-1/2'>
                                <h4 className='font-medium text-base' >Buraq Go <span></span> </h4>
                                <h5 className='font-medium text-sm'>2 min away</h5>
                                <p  className='font-normal text-sm text-gray-600' >Affordale, compact rides</p>
                                </div>
                                <h2 className='text-xl font-semibold' >193.20Rs</h2>
                            </div>
                          <div 
                              onClick={() =>{
                                props.setConfirmVehiclePanel(true)
                              }}
                          className='flex border-2 mb-2  active:border-black bg-gray-100 rounded-xl w-full p-3 items-center justify-between' >
                          <img className='h-10' src={auto} alt="" />
                          <div className='ml-2 w-1/2'>
                          <h4 className='font-medium text-base' >Buraq Go <span></span> </h4>
                          <h5 className='font-medium text-sm'>2 min away</h5>
                          <p  className='font-normal text-sm text-gray-600' >Affordale, compact rides</p>
                          </div>
                       <h2 className='text-xl font-semibold' >193.20Rs</h2>
                 </div>
        </div>
    );
}

export default VehiclePanel;