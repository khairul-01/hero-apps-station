import React from 'react';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <h1>this is Root page.</h1>
            <Outlet/>
        </div>
    );
};

export default Root;