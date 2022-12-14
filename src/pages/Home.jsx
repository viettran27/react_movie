import React from 'react';
import { category, movie, tv } from '../api/movieAPI';
import Banner from '../components/banner/Banner';
import Layout from '../components/layout/Layout';
import Slider from '../components/slider/Slider';

const Home = () => {
    return (
        <Layout hiddenSearch={'hidden'}>
            <Banner />
            <Slider title='Popular Movie' category={category.movie} type={movie.popular} />
            <Slider title='Top Rated Movie' category={category.movie} type={movie.top_rated} />
            <Slider title='Popular TV' category={category.tv} type={tv.popular} />
            <Slider title='Top Rated TV' category={category.tv} type={tv.top_rated} />
        </Layout>
    );
};

export default Home;