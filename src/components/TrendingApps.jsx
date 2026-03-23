import React from 'react';
import AppsCard from './Shared/AppsCard';

const TrendingApps = ({apps}) => {
    return (
        <div className='text-primary'>
            <h1 className='text-5xl font-bold text-center my-3'>Trending Apps</h1>
            <p className='text-center mt-2 text-primary/60'>Explore All Trending Apps on the Market developed by us</p>
            <div className='my-8 grid sm:grid-cols-4 gap-4'>
                {
                    apps.map(app => (
                        <AppsCard key={app.id} app={app}_></AppsCard>
                    ))
                }
            </div>
            <div className='flex justify-center'>
                <button className='btn bg-linear-to-br from-[#632EE3] to-[#9F62F2] px-5 py-4 font-semibold text-white'>Show All</button>
            </div>
        </div>
    );
};

export default TrendingApps;