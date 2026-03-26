import React from 'react';
import gplay from '../assets/fi_16076057.png'
import app from '../assets/fi_5977575.png'

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-100">
                <div className="hero-content text-center text-primary">
                    <div className="max-w-2/3">
                        <h1 className="text-5xl font-bold">We Build <br /> <span className='bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</h1>
                        <p className="py-6 text-primary/60">
                            At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.
                        </p>
                        <div className='space-x-3'>
                            <a href='https://play.google.com/store/games?hl=en' target='_blank' className="btn btn-primary btn-outline text-lg px-3 py-2"><img src={gplay} alt="" className='w-7 h-7' /> Google Play</a>
                            <a href='https://www.apple.com/app-store/' target='_blank' className="btn btn-primary btn-outline text-lg px-3 py-3"><img src={app} alt="" className='w-7 h-7' /> App Store</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;