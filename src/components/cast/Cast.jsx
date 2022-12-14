import React from 'react';

const Cast = ({ image, name, character }) => {
    return (
        <div className='flex items-center'>
            <img src={image} alt="" className='w-14 h-14 rounded-full' />
            <div className='ml-4'>
                <h3 className=''>{name}</h3>
                <h4 className='text-sm text-gray-deep'>As {character}</h4>
            </div>
        </div>
    );
};

export default Cast;