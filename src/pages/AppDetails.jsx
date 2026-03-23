import { Download, Star } from 'lucide-react';
import React from 'react';
import { useLoaderData } from 'react-router';
import dnimg from '../assets/icon-downloads.png'
import ratimg from '../assets/icon-ratings.png'
import revimg from '../assets/icon-review.png'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const AppDetails = () => {
    const app = useLoaderData();
    console.log(app)
    console.log(app.ratings)
    const barData = [...app.ratings].reverse();
    console.log(barData)
    return (
        <div className='px-10'>
            <div className="hero bg-base-100 min-h-70vh text-primary">
                <div className="flex gap-10 flex-col lg:flex-row">
                    <img
                        src={app.image}
                        className="max-w-md rounded-lg shadow-2xl"
                    />
                    <div className=''>
                        <h1 className="text-3xl font-bold">{app.title}</h1>
                        <p className="py-2 text-primary/65">
                            Developed by <span className='bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-semibold'>{app.companyName}</span>
                        </p>
                        <div className='border-1 border-white shadow-gray-400 w-full my-2 mb-0'></div>

                        <div>
                            <div className="my-4 stats gap-4 stats-vertical lg:stats-horizontal shadow">
                                <div className="stat border-none">
                                    <div className="stat-desc"> <img src={dnimg} alt="download" className='h-8 mb-2' /> </div>
                                    <div className="stat-title">Downloads</div>
                                    <div className="stat-value">
                                        {
                                            new Intl.NumberFormat("en-US", {
                                                notation: "compact"
                                            }).format(app.downloads)
                                        }
                                    </div>
                                </div>

                                <div className="stat border-none">
                                    <div className=""> <img src={ratimg} alt="download" className='h-8 mb-2' /> </div>
                                    <div className="stat-title">Average Ratings</div>
                                    <div className="stat-value">{app.ratingAvg}</div>
                                </div>

                                <div className="stat">
                                    <div className=""> <img src={revimg} alt="download" className='h-8 mb-2' /> </div>
                                    <div className="stat-title">Total Reviews</div>
                                    <div className="stat-value">
                                        {
                                            new Intl.NumberFormat("en-US", {
                                                notation: "compact"
                                            }).format(app.reviews)
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="text-white btn bg-linear-to-br from-[#00D390] to-[#09a070]">Install Now ({app.size} MB) </button>
                    </div>
                </div>
            </div>

            <div className='my-10 text-primary'>
                <h1 className='text-xl font-semibold my-6'>Ratings</h1>
                <div>
                    <ResponsiveContainer height={330} width='100%'>
                        <BarChart data={barData} layout='vertical'>
                            {/* <CartesianGrid strokeDasharray="3 3"/> */}
                            <XAxis type='number' />
                            <YAxis dataKey='name' type='category'/>
                            <Tooltip/>
                            <Bar dataKey='count' fill='#FF8811'/>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className='my-10 text-primary'>
                <h1 className='text-xl font-semibold my-6'>Description</h1>
                <div>
                    <p className='text-primary/55'>{app.description}</p>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;