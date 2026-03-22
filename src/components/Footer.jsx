import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-10 pb-0">
                <aside>
                    <div className='flex justify-center items-center'>
                        <img className='w-9 h-9' src={logo} alt="apps logo" />
                        <h3 className="text-lg bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent uppercase font-bold ml-1">Hero app</h3>
                    </div>
                    <p className='text-wrap'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Commodi incidunt veritatis ullam! Asperiores officia ad <br /> natus quia, rem aut sit.
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Our Mission</a>
                    <a className="link link-hover">Contact Saled</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Product & Services</a>
                    <a className="link link-hover">Customer Stories</a>
                    <a className="link link-hover">Download Apps</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Information</h6>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Terms & Conditions</a>
                    <a className="link link-hover">Join Us</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social Links</h6>
                    <div className='mt-2 flex gap-2'>
                        <a className="link link-hover border-0 bg-amber-50 rounded-full p-1"><i className="fa-brands fa-x-twitter text-lg"></i> </a>
                        <a className="link link-hover border-0 bg-amber-50 rounded-full p-1"><i className="fa-brands fa-linkedin-in text-lg"></i> </a>
                        <a className="link link-hover border-0 bg-amber-50 rounded-full p-1"><i className="fa-brands fa-facebook-f text-lg"></i> </a>
                        <a className="link link-hover border-0 bg-amber-50 rounded-full p-1"><i className="fa-solid fa-envelope text-lg"></i> </a>
                    </div>
                </nav>
            </footer>
            <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-10">
                <div className='border-t w-full border-amber-50'></div>
                <aside>
                    <p> © {new Date().getFullYear()}  Hero App Systems. All right reserved.</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;