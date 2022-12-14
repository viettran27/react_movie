import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Link } from "react-router-dom"

import movieAPI, { category } from '../../api/movieAPI';
import Card from '../card/Card';

const Slider = (props) => {
    const [sliderItems, setSliderItems] = useState([])
    const link = `/${category[props.category]}`

    useEffect(() => {
        const getData = async () => {
            let res = null;
            const params = {}

            switch (props.category) {
                case category.movie:
                    res = await movieAPI.getMovieList(props.type, { params })
                    break;
                case category.tv:
                    res = await movieAPI.getTvList(props.type, { params })
                    break;
                default:
                    break;
            }

            setSliderItems(res.results)
        }

        props.item ? setSliderItems(props.item) : getData()
    }, [])

    return (
        <div className='mt-10'>
            <div className='flex justify-between'>
                <h3 className='text-white text-2xl mb-5'>{props.title}</h3>
                <Link to={link}>
                    <h5 className='text-gray-deep'>See all</h5>
                </Link>
            </div>
            <Swiper
                grabCursor={true}
                spaceBetween={20}
                slidesPerView={4}
            >
                {
                    sliderItems.map(item => (
                        <SwiperSlide key={item.id}>
                            <Card item={item} type={props.category} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default Slider;