import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, createBrowserRouter, createRoutesFromElements, Router, RouterProvider} from 'react-router-dom';
import UserContext, { ContextProvider } from './context/UserContext.jsx';
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import UserLogin from './Pages/UserLogin'
import UserSignup from './Pages/UserSignup'
import CaptainLogin from './Pages/CaptainLogin'
import CaptainSignup from './Pages/CaptainSignup'
import Start from './Pages/Header'
import Riding from './Pages/Riding'
import CaptainHome from './Pages/CaptainHome'
import CaptainRiding from './Pages/CaptainRiding'
import AiTripPlaner from './Pages/AiTripPlaner'
import About from './Pages/About'
import Layout from './Layout'
import LoginPage from './Pages/LoginPage'
import SignupPage from './Pages/SignupPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    < Route path='/' element={<Layout />}>
          < Route path='/home' element={<Home/>}/>
          < Route path='/AI-trip' element={<AiTripPlaner/>}/>
          < Route path='/about' element={<About/>}/>
          < Route path='/Sign-in' element={<LoginPage/>}/>
          < Route path='/Singn-up' element={<SignupPage/>}/>
          < Route path='/login' element={<UserLogin />}/>
          < Route path='/signup' element={<UserSignup />}/>
          < Route path='/captain-login' element={<CaptainLogin />}/>
          < Route path='/captain-signup' element={<CaptainSignup />}/>
          < Route path='/captain-home' element={<CaptainHome />}/>
          < Route path='/ride' element={<Riding />}/>
          < Route path='/captain-riding' element={<CaptainRiding />} />
          </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
    <RouterProvider router={router} />
    </ContextProvider>
  </StrictMode>,
)
