import React from 'react';
import dowld from '../../assets/icon-downloads.png'
import star from '../../assets/icon-ratings.png'
// import { deleteInstalledApps } from '../../utility/LocalStorage';

const InstallCard = ({ app, handleUnInstall }) => {

    // const handleUnInstall = (id) => {
    //     deleteInstalledApps(id)
    // }
    return (
        <div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-base-100 shadow-lg p-3">

                <div className='flex flex-col sm:flex-row sm:gap-4 items-center'>
                    <figure className='rounded-xl h-20 w-20'>
                        <img className='size-full rounded-xl object-cover hover:scale-105 transition-all hover:-rotate-1'
                            src={`${app.image}?w-200&q=70`}
                            // loading='lazy'
                            alt="Apps" />
                    </figure>
                    <div className='sm:h-22'>
                        <h2 className=" font-semibold mt-2 p-2 text-center sm:text-start">
                            {app.title}
                        </h2>
                        <div className="card-actions justify-center sm:justify-around ">
                            <div className="badge badge-soft badge-success">
                                <img src={dowld} alt="download" className='h-5' />
                                <span>
                                    {
                                        new Intl.NumberFormat("en-US", {
                                            notation: "compact"
                                        }).format(app.downloads)
                                    }
                                </span>
                            </div>
                            <div className="badge badge-soft badge-warning">
                                <img src={star} alt="star" className='h-5' />
                                {app.ratingAvg}
                            </div>
                            <div className="badge badge-soft ">
                                
                                {app.size} MB
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">

                    <button
                        onClick={() => handleUnInstall(app.id)}
                        className="text-white btn bg-linear-to-br from-[#00D390] to-[#09a070]">
                        UnInstall
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InstallCard;