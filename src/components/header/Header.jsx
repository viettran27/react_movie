import React, { useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate, useParams } from "react-router-dom"

const headerNav = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Movies",
        path: "/movie"
    },
    {
        name: "TV Show",
        path: "/tv"
    },
]

const Header = ({ hiddenSearch }) => {
    const location = useLocation();
    const { cate } = useParams();
    const navigate = useNavigate();
    const header = useRef(null);
    const search = useRef(null)

    const active = headerNav.findIndex(item => item.path === location.pathname)


    useEffect(() => {
        const shrinkHeader = () => {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                header.current.classList.add('bg-black-opacity');
            } else {
                header.current.classList.remove('bg-black-opacity');
            }
        }
        window.addEventListener('scroll', shrinkHeader);

        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
    }, []);

    const handleSearch = (e) => {
        if (search.current.value && e.key === 'Enter') {
            navigate(`/${cate}/search/${search.current.value}`)
        } else {
            navigate(`/${cate}`)
        }
    }

    return (
        <div ref={header} className='grid grid-cols-3 items-center px-10 h-16 justify-between fixed top-0 left-0 right-0 z-50'>
            <Link to={'/'} className='text-4xl text-green-500'>VietFlix</Link>
            <ul className='flex justify-center'>
                {
                    headerNav.map((item, index) => (
                        <li key={index} className={`px-5 ${index === active ? 'decoration-green-500 underline underline-offset-8' : ''}`}>
                            <Link to={item.path}>{item.name}</Link>
                        </li>
                    ))
                }
            </ul>
            <div className='flex justify-end'>
                <input type="text" onKeyUp={handleSearch} ref={search} className={`px-4 py-2 rounded-3xl bg-[#374151] placeholder:text-gray-deep outline-none ${hiddenSearch ? 'hidden' : ''}`} placeholder='Search' />
            </div>
        </div>
    );
};

export default Header;