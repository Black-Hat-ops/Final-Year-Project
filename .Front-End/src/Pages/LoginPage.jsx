import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = (props) => {
    return (
        <div className='flex'>
            <p className='text-center' >Be the Treval Mate?<Link to='/captain-signup' className='text-green-500'>Register as captain</Link></p>
            <p className='text-center' >New Mate?<Link to='/signup' className='text-green-500'>Create New Account</Link></p>
        </div>
    );
}

export default LoginPage;