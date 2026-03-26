import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import AppsCard from '../components/Shared/AppsCard';
import Loading from '../components/Shared/Loading';

const AllApps = () => {
    const [search, setSearch] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const allApps = useLoaderData();
    // const [displayApps, setDisplayApps] = useState(allApps);

    const filterApps = allApps.filter((app) => app.title.toLowerCase().includes(search.toLocaleLowerCase()))
    // || app.description.toLowerCase().includes(search.toLocaleLowerCase()) 
    // console.log(filterApps)
    // const handleSearch = (value) => {
    //     setLoading(true)
    //     setSearch(value);
    //     const filterApps = allApps.filter((app) => app.title.toLowerCase().includes(search.toLocaleLowerCase()))

    //     setDisplayApps(filterApps)
    //     setLoading(false)
    // }
    // const displayApps = search ? filterApps : allApps;
    const displayApps = filterApps;

    console.log(search)


    return (
        <div className='text-primary px-4 sm:px-10'>
            <h1 className='text-5xl font-bold text-center my-4'>Our All Applications</h1>
            <p className='text-center my-2 text-primary/60'>Explore All Apps on the Market developed by us. We code for Millions</p>

            <div className='my-8'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-xl font-semibold'>({displayApps.length}) Apps Found</h2>
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search"
                            onKeyDown={() => setIsTyping(true)}
                            onKeyUp={() => setIsTyping(false)}
                        />
                    </label>
                </div>
                {/* <div className='flex justify-center '>
                    {
                        isTyping && <p>Searching <span className="loading loading-spinner text-error loading-xl py-3 "></span></p>
                    }
                </div> */}
                {
                    isTyping ? <Loading />
                        :
                        (
                            displayApps.length === 0
                                ?
                                <p className='text-center mt-7 text-2xl font-bold'>No Apps Found</p>
                                :
                                <div className='my-3 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4'>
                                    {
                                        displayApps.map(app => (
                                            <AppsCard key={app.id} app={app}></AppsCard>
                                        ))
                                    }
                                </div>
                        )
                }

            </div>
        </div>
    );
};

export default AllApps;