import React from 'react';
import { Link } from "react-router-dom"
import { apiConfig } from '../../api/axiosClient';
import { category } from '../../api/movieAPI';

const Card = ({ item, type }) => {
    const link = `/${category[type]}/${item.id}`
    const background = apiConfig.w500Image(item.backdrop_path || item.poster_path)

    return (
        <Link to={link}>
            <img src={background} alt="" className='h-56 rounded-2xl w-full' />
            <div className='mt-2 flex px-2'>
                <span className='text-white basis-7/12 truncate'>{item.title || item.name}</span>
                <div className='text-right flex-1'>
                    <span>⭐</span>
                    <span className='text-gray-deep ml-2'>{item.vote_average}</span>
                </div>
            </div>
        </Link >
    );
};

export default Card;