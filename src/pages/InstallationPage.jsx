import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { deleteInstalledApps, getSavedApps } from '../utility/LocalStorage';
import InstallCard from '../components/Shared/InstallCard';
import { Confirm } from 'notiflix';
import toast from 'react-hot-toast';

const InstallationPage = () => {
    const [installedApps, setInstalledApps] = useState([]);
    const [sortType, setSortType] = useState('')
    const apps = useLoaderData();
    useEffect(() => {
        const storedAppsId = getSavedApps();
        const getApps = apps.filter(app => storedAppsId.includes(app.id));
        setInstalledApps(getApps)
        console.log(getApps)
    }, [apps])

    const handleSorting = (type) => {
        console.log('sort is clicked')
        setSortType(type)
        if (type === 'High-Low') {
            const sortedApps = [...installedApps].sort((a, b) => b.downloads - a.downloads)
            console.log(sortedApps)
            setInstalledApps(sortedApps)
        }
        if (type === 'Low-High') {
            const sortedApps = [...installedApps].sort((a, b) => a.downloads - b.downloads)
            console.log(sortedApps)
            setInstalledApps(sortedApps)
        }
    }

    const handleUnInstall = (id) => {
        Confirm.show(
            'Are you sure!',
            'This App will be UnInstalled from your device',
            'Yes',
            'No',
            () => {
                deleteInstalledApps(id)
                const updatedInstall = installedApps.filter(app => app.id !== id)
                console.log(updatedInstall)
                setInstalledApps(updatedInstall);

                toast.success(`The app has been UnInstalled successfully`)

            },
        );

    }

    return (
        <div className='text-primary px-10'>
            <h1 className='text-5xl font-bold text-center my-4'>Your Installed Apps</h1>
            <p className='text-center my-2 text-primary/60'>Explore All Trending Apps on the Market developed by us</p>

            <div className='my-8'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-xl font-semibold'>({installedApps.length}) Apps Found</h2>
                    {/* <select defaultValue="Pick a color" className="select">
                        <option disabled={true}>Pick a color</option>
                        <option>Crimson</option>
                        <option>Amber</option>
                        <option>Velvet</option>
                    </select> */}
                    <div className="dropdown dropdown-start">
                        <div tabIndex={0} role="button" className="btn m-1">Sort By: {sortType} ⬇️</div>
                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li onClick={() => handleSorting('High-Low')}><a>High to Low</a></li>
                            <li onClick={() => handleSorting('Low-High')}><a>Low to High</a></li>
                        </ul>
                    </div>
                </div>


                <div className='my-3 grid grid-cols-1 gap-4'>
                    {
                        installedApps.length===0
                        ?
                        <p className='text-center mt-7 text-2xl font-bold'>No Installed Apps Found</p>
                        :
                        installedApps.map(app => (
                            <InstallCard key={app.id} app={app} handleUnInstall={handleUnInstall}></InstallCard>
                        ))
                    }
                </div>

            </div>
        </div>
    );
};

export default InstallationPage;