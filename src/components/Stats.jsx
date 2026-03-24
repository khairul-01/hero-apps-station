
import appWev from '../assets/hero.png'

const Stats = () => {

    return (
        <div>
            <div className='flex justify-center w-2/3 mx-auto'>
                <img className='object-cover w-full' src={appWev} alt="Apps" />
            </div>
            <div className='bg-linear-to-br from-[#632EE3] to-[#9F62F2] py-10'>
                <h1 className='text-center text-4xl text-white font-semibold'>Trusted by Millions, Built for You</h1>
                <div className='flex justify-center items-center mt-6'>
                    <div className="stats stats-vertical lg:stats-horizontal shadow text-white flex justify-center items-center gap-7 text-center">
                        <div className="stat">
                            <div className="stat-title text-white">Total Downloads</div>
                            <div className="stat-value">29.6M</div>
                            <div className="stat-desc text-white">21% more than last month</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title text-white">Total Reviews</div>
                            <div className="stat-value">906K</div>
                            <div className="stat-desc text-white">46% more than last month</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title text-white">Active Apps</div>
                            <div className="stat-value">132+</div>
                            <div className="stat-desc text-white">31 more will Launch</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;