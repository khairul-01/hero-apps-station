import React from 'react';
import AppsCard from './Shared/AppsCard';
import { Link } from 'react-router';

const TrendingApps = ({apps}) => {
    return (
        <div className='text-primary px-4 sm:px-10'>
            <h1 className='text-5xl font-bold text-center my-3'>Trending Apps</h1>
            <p className='text-center mt-2 text-primary/60'>Explore All Trending Apps on the Market developed by us</p>
            <div className='my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    apps.map(app => (
                        <AppsCard key={app.id} app={app}_></AppsCard>
                    ))
                }
            </div>
            <div className='flex justify-center'>
                <Link to={'/apps'} className='btn bg-linear-to-br from-[#632EE3] to-[#9F62F2] px-5 py-4 font-semibold text-white'>Show All</Link>
            </div>
        </div>
    );
};

export default TrendingApps;