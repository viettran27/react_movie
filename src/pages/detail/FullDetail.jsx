import React from 'react';
import { useState } from 'react';
import Genres from '../../components/genres/Genres';
import Trailer from './Trailer';

const FullDetail = ({ detail, trailer }) => {
    const [showTrailer, setShowTrailer] = useState(false)

    const handleShowTrailer = (checkShowTrailer) => {
        setShowTrailer(checkShowTrailer)
    }

    return (
        <div className='pt-10'>
            <h1 className='text-3xl'>{detail.title || detail.original_name}</h1>
            <h3 className='mt-2'>{detail.tagline}</h3>
            <button className='mt-4 px-6 py-3 rounded-3xl bg-red-500 text-lg' onClick={() => handleShowTrailer(true)}>{trailer ? 'Watch Trailer' : "Trailer Updating"}</button>
            <p className='mt-4 text-sm'>{detail.overview}</p>
            <h2 className='mt-4 text-2xl'>Details</h2>
            <div>
                <div className='flex items-center border-b-2 py-3'>
                    <div className='basis-3/12'>Genres</div>
                    <div className='flex flex-wrap gap-3'>
                        {
                            detail.genres.map(genres => (<Genres key={genres.id} name={genres.name} />))
                        }

                    </div>
                </div>
                <div className='flex items-center border-b-2 py-3'>
                    <div className='basis-3/12'>Status</div>
                    <div>{detail.status}</div>
                </div>
                <div className='flex items-center border-b-2 py-3'>
                    <div className='basis-3/12'>Runtime</div>
                    <div>{detail.runtime} min</div>
                </div>
            </div>
            {
                trailer && (
                    <Trailer trailer={trailer} showTrailer={showTrailer} handleShowTrailer={handleShowTrailer} />
                )
            }
        </div>
    );
};

export default FullDetail;