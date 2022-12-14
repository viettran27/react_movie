import React from 'react';

const Genres = ({ name }) => {
    return (
        <div className='w-max px-3 grid place-items-center py-1 rounded-3xl bg-gray-600'>
            {name}
        </div>
    );
};
export default Genres;