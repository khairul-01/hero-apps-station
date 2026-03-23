import React from 'react';
import Banner from '../components/Banner';
import Stats from '../components/Stats';
import TrendingApps from '../components/TrendingApps';
import { useLoaderData } from 'react-router';

const Home = () => {
    const apps = useLoaderData();
    console.log(apps)
    return (
        <div className=' space-y-7'>
            <Banner></Banner>
            <Stats></Stats>
            <TrendingApps apps={apps}></TrendingApps>
        </div>
    );
};

export default Home;