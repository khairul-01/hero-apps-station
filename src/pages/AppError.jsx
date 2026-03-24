import React from 'react';
import { Link } from 'react-router';
import appimg from '../assets/App-Error.png'

const AppError = () => {
    return (
        <div>
            <div className='text-center h-70vh flex flex-col items-center justify-center p-4 gap-4'>
                <img src={appimg} alt="Error" className='w-90' />
                <div className='space-y-2 text-primary'>
                    <h1 className='text-5xl font-semibold'>Oops, App not found?</h1>
                    <p className='text-primary/60'>The App you are requesting is not found on our system.  please try another apps</p>
                    <Link to={'/'} className='btn bg-linear-to-br from-[#632EE3] to-[#9F62F2]'>Go Back</Link>
                </div>
            </div>
        </div>
    );
};

export default AppError;