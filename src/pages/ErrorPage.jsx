import React from 'react';
import { Link } from 'react-router';
import error from "../assets/error-404.png"

const ErrorPage = () => {
    return (
        <div className='text-center h-screen flex flex-col items-center justify-center p-4 px-8 gap-4'>
            <img src={error} alt="Error" className='w-96' />
            <div className='space-y-2 text-primary'>
                <h1 className='text-5xl font-semibold'>Oops, page not found?</h1>
                <p className='text-primary/60'>The page you are looking for is not available.</p>
                <Link to={'/'} className='btn bg-linear-to-br from-[#632EE3] to-[#9F62F2]'>Go Back</Link>
            </div>
        </div>
    );
};

export default ErrorPage;