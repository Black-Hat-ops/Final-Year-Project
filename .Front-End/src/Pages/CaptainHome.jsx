import React, { useRef, useState } from 'react';
import bgImage from '../assets/pak-map-2.jpg'
import car from '../assets/uber-car.png'
import logo from '../assets/logoImage.png'
import Home from '../assets/Icons/home-5-line.png'
import {Link} from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails';
import RidePopUp from '../components/RidePopUp';
import ConfirmRidePopUp from '../components/ConfirmRidePopUp';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const CaptainHome =() => {

    const [ridePopupPanel , setRidePopUp] = useState(true)
    const [confirmRidePopupPanel , setConfirmRidePopupPanel] = useState(false)

    const ridePopUpRef = useRef(null)
    const confirmRidePopupPanelRef = useRef(null)

    useGSAP(function () {
        if (ridePopupPanel) {
            gsap.to(ridePopUpRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(ridePopUpRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ ridePopupPanel ])

    useGSAP(function () {
        if (confirmRidePopupPanel ) {
            gsap.to(confirmRidePopupPanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(confirmRidePopupPanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ confirmRidePopupPanel ])

    return (
        <div className='h-screen'>
              <Link to='/' className='fixed w-12 right-4  h-10 bg-white flex items-center' >
                <img src={Home} alt="" />
            </Link>

            <div className='h-3/5' >
               <img className='h-full w-full object-cover' src={bgImage} alt="" />
            </div>
            <div>
               <CaptainDetails  />
            </div>
            <div ref={ridePopUpRef} className='fixed w-full z-10 bottom-0 bg-white px-3 py-10 pt-12' >
               <RidePopUp
                 setRidePopUp = {setRidePopUp}
                 setConfirmRidePopupPanel = {setConfirmRidePopupPanel}
                />
            </div>
            <div ref={confirmRidePopupPanelRef}  className='fixed w-full z-10 bottom-0 bg-white px-3 py-10 pt-12' >
                <ConfirmRidePopUp 
                  setRidePopUp = {setRidePopUp}
                  setConfirmRidePopupPanel = {setConfirmRidePopupPanel}
                />
            </div>
            
        </div>
    );
}

export default CaptainHome;