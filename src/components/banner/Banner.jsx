import React, { useEffect, useState } from 'react';

import { Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';

import movieAPI, { movie } from '../../api/movieAPI';
import Slide from './Slide';

const Banner = () => {
    const [movieItems, setMovieItems] = useState([])

    useEffect(() => {
        const getMovies = async () => {
            const params = { page: 1 }
            try {
                const res = await movieAPI.getMovieList(movie.popular, { params })
                setMovieItems(res.results.slice(0, 4))
            } catch (error) {
                console.log(error);
            }
        }
        getMovies();
    }, [])

    return (
        <div>
            <h2 className='text-white text-2xl'>Explore</h2>
            <span className='text-gray-deep text-xl'>What are you gonna
                what today?</span>
            <div className='mt-4'>
                <Swiper
                    modules={[Autoplay]}
                    grabCursor={true}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                >
                    {
                        movieItems.map(item => (
                            <SwiperSlide key={item.id}>
                                {
                                    ({ isActive }) => (
                                        <Slide item={item} className={`${isActive ? 'active' : ''}`} />
                                    )
                                }
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
};



export default Banner;