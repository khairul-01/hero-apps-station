import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='text-center mt-16'>
            <h1>This is error page. wrong path</h1>
            <Link to={'/'} className='btn btn-error'>Go Home</Link>
        </div>
    );
};

export default ErrorPage;