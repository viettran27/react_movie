import React from 'react';

const PosterDetail = ({ detail, image }) => {
    return (
        <div className='px-20'>
            <img className='rounded-lg' src={image} alt="" />
            <div className='mt-3 grid grid-cols-2 items-center'>
                <span className='text-3xl'>⭐ {Number(detail.vote_average).toFixed(1)}</span>
                <div className='text-right'>
                    <h6>{detail.vote_count} <span className='text-gray-deep'>ratings</span></h6>
                    <h6>{detail.popularity} <span className='text-gray-deep'>views</span></h6>
                </div>
            </div>
        </div>
    );
};

export default PosterDetail;