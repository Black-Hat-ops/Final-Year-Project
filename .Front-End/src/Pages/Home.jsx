import React, { useState , useRef } from "react";
import {useGSAP} from '@gsap/react'
import gsap from 'gsap';
import logo from "../assets/Buraq.jpg"
import map from '../assets/pak-map.avif'
import SearchPanel from '../components/SearchPanel.jsx'
import ConfirmVehicleRide from "../components/ConfirmVehicleRide.jsx";
import VehiclePanel from "../components/VehiclePanel.jsx";
import WaitForDeiver from "../components/WaitForDeiver.jsx";
import LookingForDriver from "../components/LookingForDriver.jsx";
const Home = () => {
    const[pickUp , setPickUp] = useState('')
    const[dropOff , setdropOff] = useState('')
    const[panelOpen , setpanelOpen] = useState(false)
    const[VehiclePanal , setVehiclePanel] = useState(false)
    const[ConfirmVehiclePanal , setConfirmVehiclePanel] = useState(false)
    const[VehicleFound , setVehicleFound] = useState(false)
    const[WaitForDriver , setWaitForDriver] = useState(false)

    const panelRef = useRef(null)
    const VehiclePanelRef = useRef(null)
    const confirmRidePanelref = useRef(null)
    const VechileFoundRef = useRef(null)
    const WaitForDriverRef = useRef(null)
    const panelCloseRef = useRef(null)

    const submitHandler = (e) =>{
        e.preventDefault()

    }

    useGSAP(function () {
        if (panelOpen) {
            gsap.to(panelRef.current, {
                height: '70%',
                padding: 24
                // opacity:1
            })
            gsap.to(panelCloseRef.current, {
                opacity: 1
            })
        } else {
            gsap.to(panelRef.current, {
                height: '0%',
                padding: 0
                // opacity:0
            })
            gsap.to(panelCloseRef.current, {
                opacity: 0
            })
        }
    }, [ panelOpen ])

    useGSAP(function () {
        if (VehiclePanal) {
            gsap.to(VehiclePanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(VehiclePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ VehiclePanal ])

    useGSAP(function () {
        if ( ConfirmVehiclePanal   ) {
            gsap.to(confirmRidePanelref.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(confirmRidePanelref.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ ConfirmVehiclePanal   ])

    useGSAP(function () {
        if (VehicleFound) {
            gsap.to(VechileFoundRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(VechileFoundRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ VehicleFound ])

    useGSAP(function () {
        if (WaitForDriver) {
            gsap.to(WaitForDriverRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(WaitForDeiver.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ WaitForDriver ])

    return (
        <div className='h-screen relative overflow-hidden'>
            <img className='w-16 absolute left-5 top-5'  src={logo} alt="" />
            <div className='h-screen w-screen'>
                <img className='h-full w-full object-cover' src={map} alt="" />
            </div>
            <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
                <div className='h-[30%] p-5 bg-emerald-600 relative'>
                    <h5 ref={panelCloseRef} onClick={() => {
                        setpanelOpen(false)}} className='absolute opacity-0 right-6 top-6 text-2xl'>
                        <i className="ri-arrow-down-wide-line"></i>
                    </h5>
                <h4 className='text-2xl font-semibold' >Find a Trip</h4>
                <form onSubmit={
                    (e)=>{
                    submitHandler(e)}}>
                    <div className='line absolute h-16 w-1 top-[56%] left-10 bg-gray-900 rounded-full' ></div>
                    <input 
                    onClick={()=>{ 
                        setpanelOpen(true)}}
                    value={pickUp}
                    onChange={(e)=>{ setPickUp(e.target.value) }}
                    className='bg-[#eeee] px-12 py-2 text-base rounded-lg w-full mt-5 ' type='text' placeholder="Add a Pick-up location" />
                    <input 
                    onClick={()=>{ 
                        setpanelOpen(true) }}
                    value={dropOff}
                    onChange={(e)=>{ setdropOff(e.target.value) }}
                    className='bg-[#eeee] px-12 py-2 text-base rounded-lg w-full mt-5' type="text" placeholder="Add your destination" />
                </form>
                </div>
                <div ref={panelRef}  className='h-[70%] bg-white p-5  '>
                <SearchPanel panalOpen={panelOpen} setpanelOpen={setpanelOpen}   VehiclePanal={VehiclePanal}  setVehiclePanel={setVehiclePanel} />
                </div>
            </div>
            
            <div ref={VehiclePanelRef} className='fixed w-auto z-10 bg-white translate-y-full bottom-0 px-3 py-8'>
                <VehiclePanel 
                    setVehiclePanel = {setVehiclePanel}
                    setConfirmVehiclePanel ={setConfirmVehiclePanel}
                />
            </div>
            <div ref={confirmRidePanelref} className='fixed w-auto z-10 bg-white translate-y-full bottom-0 px-3 py-8'>
                <ConfirmVehicleRide 
                    setConfirmVehiclePanel={setConfirmVehiclePanel} 
                    setVehicleFound ={setVehicleFound} 
                    setVehiclePanel ={setVehiclePanel}
                />
            </div>
            <div ref={VechileFoundRef} className='fixed w-auto z-10 bg-white translate-y-full bottom-0 px-3 py-8 '  >
                <LookingForDriver 
                    setVehicleFound={setVehicleFound}
                />
            </div>
            <div ref={WaitForDriverRef} className='fixed w-auto z-10 bg-white translate-y-full bottom-0 px-3 py-8 '  >
                <WaitForDeiver  
                    setWaitForDriver={setWaitForDriver}  
                />
            </div>
        </div>
    )
}
export default Home;