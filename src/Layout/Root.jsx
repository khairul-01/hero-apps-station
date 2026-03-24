import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loading from '../components/Shared/Loading';

const Root = () => {
    const navigation = useNavigation();
    return (
        <div className='space-y-10'>
            <Navbar></Navbar>
            {/* {
                navigation.state === "loading" && (
                    // <div className="fixed top-0 left-0 w-full h-1 bg-blue-500 animate-bounce"></div>
                    <p className='text-center text-5xl text-red-500 py-10'>Data Loading .....</p>
                    // <div className='w-full bg-blue-500 '> Loading ...
                    // <span className="loading loading-spinner loading-xl animate-spin">x</span>
                    // </div>
                )
            } */}
            {
                navigation.state === "loading" ? <Loading/> : <Outlet/>
            }
            
            <Footer></Footer>
        </div>
    );
};

export default Root;