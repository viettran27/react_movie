import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import movieAPI, { movie, tv } from '../api/movieAPI';
import { category } from '../api/movieAPI';
import GridCard from '../components/grid_card/GridCard';

import { useParams } from 'react-router';
import Layout from '../components/layout/Layout';

const Catalog = (props) => {
    const { cate, keyword } = useParams()
    const [pageCount, setPageCount] = useState(0)
    const [listItems, setListItems] = useState([])

    useEffect(() => {
        const getData = async () => {
            let res = null
            try {
                if (!keyword) {
                    const params = {}
                    switch (cate) {
                        case category.movie:
                            res = await movieAPI.getMovieList(movie.top_rated, { params })
                            break;
                        default:
                            res = await movieAPI.getTvList(tv.top_rated, { params })
                            break;
                    }
                } else {
                    const params = {
                        query: keyword
                    }
                    res = await movieAPI.search(cate, { params })
                }

                setListItems(res.results)
                setPageCount(res.total_pages)
            } catch (error) {
                console.log(error);
            }
        }

        getData()
    }, [cate, keyword])

    const handlePageClick = async (initialPage) => {
        let res = null
        const params = {
            page: initialPage.selected + 1
        }

        try {
            switch (cate) {
                case category.movie:
                    res = await movieAPI.getMovieList(movie.top_rated, { params })
                    break;
                default:
                    res = await movieAPI.getTvList(tv.top_rated, { params })
                    break;
            }
        } catch (error) {
            console.log(error);
        }

        setListItems(res.results)

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }


    return (
        <Layout>
            <GridCard listItems={listItems} type={cate} />
            <div className='flex justify-center mt-10'>
                <ReactPaginate
                    previousLabel="<"
                    nextLabel=">"
                    containerClassName='text-white flex'
                    breakLinkClassName='text-white'
                    pageClassName="py-2 w-12 text-center"
                    previousClassName="py-2 px-4"
                    nextClassName="py-2 px-4"
                    activeClassName="border rounded-lg"
                    pageRangeDisplayed={2}
                    pageCount={pageCount}
                    onPageChange={handlePageClick}
                />
            </div>
        </Layout>
    );
};

export default Catalog;