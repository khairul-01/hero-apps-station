import React from 'react';

const Loading = () => {
    return (
        <div className=''>
            <div className="flex w-full flex-col gap-4 p-10">
                <div className="skeleton h-32 w-full text-5xl text-center py-6 text-orange-500"> Loading <span className="loading loading-spinner text-error loading-xl"></span></div> 
                <div className="skeleton h-4 w-28"></div>    {/* Ghost title */}
                <div className="skeleton h-4 w-full text-center">Please Wait</div>  
                <div className="skeleton h-4 w-full"></div>
            </div>
        </div>
    );
};

export default Loading;