import axiosClient from "./axiosClient";

export const category = {
    movie: 'movie',
    tv: 'tv',
    people: 'person'
}

export const movie = {
    popular: 'popular',
    top_rated: 'top_rated',
    upcoming: 'upcoming'
}

export const tv = {
    on_the_air: 'on_the_air',
    popular: 'popular',
    top_rated: 'top_rated'
}

const movieAPI = {
    getMovieList: (type, params) => {
        const url = `movie/${movie[type]}`
        return axiosClient.get(url, params)
    },
    getTvList: (type, params) => {
        const url = `tv/${tv[type]}`
        return axiosClient.get(url, params)
    },
    getPeople: (params) => {
        const url = `person/popular`
        return axiosClient.get(url, params)
    },
    getVideos: (cate, id) => {
        const url = `${category[cate]}/${id}/videos`
        return axiosClient.get(url, { params: {} })
    },
    getDetail: (cate, id) => {
        const url = `${category[cate]}/${id}`
        return axiosClient.get(url, { params: {} })
    },
    search: (cate, params) => {
        const url = `search/${category[cate]}`
        return axiosClient.get(url, params)
    },
    getCredits: (cate, id) => {
        const url = `${cate}/${id}/credits`
        return axiosClient.get(url, { params: {} })
    },
    getSimilarVideos: (cate, id) => {
        const url = `${cate}/${id}/similar`
        return axiosClient.get(url, { params: {} })
    }
}

export default movieAPI;