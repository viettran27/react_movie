import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import { apiConfig } from '../../api/axiosClient';
import movieAPI, { category } from '../../api/movieAPI';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Slider from '../../components/slider/Slider';
import CastDetail from './CastDetail';
import FullDetail from './FullDetail';
import PosterDetail from './PosterDetail';

const Detail = () => {
    const [detail, setDetail] = useState(null);
    const [trailer, setTrailer] = useState(null);
    const [credits, setCredits] = useState(null);
    const [similarVideos, setSimilarVideos] = useState(null);
    const { cate, id } = useParams()

    useEffect(() => {
        const getDetail = async () => {
            let res = null
            let vid = null
            let cre = null
            let smlVid = null

            try {
                switch (cate) {
                    case category.movie:
                        res = await movieAPI.getDetail(category.movie, id)
                        vid = await movieAPI.getVideos(category.movie, id)
                        cre = await movieAPI.getCredits(category.movie, id)
                        smlVid = await movieAPI.getSimilarVideos(category.movie, id)
                        break;
                    default:
                        res = await movieAPI.getDetail(category.tv, id)
                        vid = await movieAPI.getVideos(category.tv, id)
                        cre = await movieAPI.getCredits(category.tv, id)
                        smlVid = await movieAPI.getSimilarVideos(category.tv, id)
                        break;
                }
            } catch (error) {
                console.log(error);
            }
            setDetail(res)
            setTrailer(vid.results[0])
            setCredits(cre.cast.slice(0, 4))
            setSimilarVideos(smlVid.results)

            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }

        getDetail()
    }, [cate, id])

    const originalImage = detail ? apiConfig.originalImage(detail.backdrop_path) : ''
    const w500Image = detail ? apiConfig.w500Image(detail.poster_path) : ''


    return (
        <>
            {
                detail && credits && (
                    <>
                        <div className='pb-4 bg-cover bg-no-repeat' style={{ background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.8)), url(${originalImage})` }}>
                            <Header />
                            <div className='p-16'></div>
                            <div className='grid grid-cols-3 gap-10'>
                                <PosterDetail detail={detail} image={w500Image} />
                                <FullDetail detail={detail} trailer={trailer} />
                                <CastDetail credits={credits} />
                            </div>
                        </div>
                        <div className='px-20'>
                            <Slider title='Similar' item={similarVideos} category={cate === category.movie ? category.movie : category.tv} />
                        </div>
                        <Footer />
                    </>
                )
            }
        </>
    );
};

export default Detail;