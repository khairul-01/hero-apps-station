import { Download, Star } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const AppsCard = ({ app }) => {

    return (
        <div className='flex justify-center'>
            <Link to={`/appDetails/${app.id}`}>
                <div className="card bg-gray-50 shadow-md p-3">
                    <figure className='rounded-xl h-50 sm:h-60'>
                        <img className=' object-cover w-50 sm:w-full sm:max-h-full  hover:scale-105 transition-all hover:-rotate-1'
                            src={`${app.image}?w-300&q=80`}
                            // loading='lazy'
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
            </Link>
        </div>
    );
};

export default AppsCard;