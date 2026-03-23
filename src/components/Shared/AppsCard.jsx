import { Download, Star } from 'lucide-react';
import React from 'react';

const AppsCard = ({ app }) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-sm p-3">
                <figure className='rounded-xl h-80'>
                    <img className='size-full object-cover hover:scale-105 transition-all hover:-rotate-1'
                        src={app.image}
                        alt="Apps" />
                </figure>
                <div className="">
                    <h2 className=" font-semibold mt-2 p-2">
                        {app.title}
                    </h2>
                    <div className="card-actions justify-between">
                        <div className="badge badge-soft badge-success">
                            <Download size={18}></Download>
                            <span>
                                {
                                    new Intl.NumberFormat("en-US", {
                                            notation: "compact"
                                        }).format(app.downloads)
                                }
                            </span>
                        </div>
                        <div className="badge badge-soft badge-warning">
                            <Star size={18} className='text-warning fill-warning'></Star>
                            {app.ratingAvg}
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppsCard;