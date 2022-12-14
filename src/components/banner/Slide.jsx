import React from 'react';
import { Link } from 'react-router-dom';
import { apiConfig } from '../../api/axiosClient';

const Slide = ({ item }) => {
    const background = apiConfig.originalImage(item.backdrop_path || item.poster_path)
    return (
        <Link to={`/movie/${item.id}`} className='relative block bg-cover rounded-xl h-[28rem] w-full' style={{ background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.8)), url(${background})` }}>
            {/* <img src={background} alt={item.title} className='bg-black rounded-xl h-[28rem] w-full' /> */}
            <div className='absolute top-1/3 left-20 w-1/2'>
                <h3 className='text-white text-4xl'>{item.title}</h3>
                <p className='mt-10 text-white text-sm'>{item.overview}</p>
            </div>
        </Link>
    )
}



export default Slide;