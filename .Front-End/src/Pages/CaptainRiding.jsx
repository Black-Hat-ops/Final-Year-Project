import React, { useRef, useState } from 'react';
import {Link} from 'react-router-dom'
import FinishRide from '../components/FinishRide';
import logo from '../assets/logoImage.png';
import home from '../assets/Icons/home-5-line.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const CaptainRiding = () => {

    const [ finishRidePanel , setFinishRidePanel] = useState(false)
    const finishRidePanelRef = useRef(null)

    useGSAP(function () {
        if (finishRidePanel) {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ finishRidePanel ])
 

    return ( 
        <div className='h-screen relative flex flex-col justify-end' >
            <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
                <img className='w-16' src={logo} alt="" />
                <Link className='fixed w-12 right-4  h-10 bg-white flex items-center' to='/captain-home' ><img src={home} alt="" /></Link>
            </div>
            <div className='h-1/5 p-6 flex items-center justify-between relative bg-yellow-400 pt-10'
             onClick={() => {
                setFinishRidePanel(true)
             }}
            >
                <h5  className='p-1 text-center w-[90%] absolute top-0' onClick={
                    () =>{

                    }
                } >sss</h5>
                <h4 className='text-xl font-semibold'>4 KM away</h4>
                <button className=' bg-green-600 text-white font-semibold p-3 px-10 rounded-lg' >Complete Ride</button>
            </div>
            <div ref={finishRidePanelRef} className='fixed w-full z-[500] bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
                <FinishRide
                  setFinishRidePanel = {setFinishRidePanel}
                  />
            </div>
        </div>
    );
}

export default CaptainRiding;