import React, { useRef, useEffect } from 'react';

const Trailer = ({ trailer, showTrailer, handleShowTrailer }) => {
    const iframeRef = useRef(null);

    useEffect(() => {
        const height = iframeRef.current.offsetWidth * 9 / 16 + 'px';
        iframeRef.current.height = height;
    }, [showTrailer]);

    const handleTrailer = () => {
        handleShowTrailer(false)
        iframeRef.current.src = `https://www.youtube.com/embed/${trailer.key}`
    }

    return (
        <div onClick={handleTrailer} className={`${showTrailer ? '' : 'hidden'} cursor-pointer fixed top-0 bottom-0 left-0 right-0 bg-black-opacity z-10 grid place-items-center`}>
            <button className='absolute right-10 top-10 text-2xl' onClick={handleTrailer}>X</button>
            <iframe
                src={`https://www.youtube.com/embed/${trailer.key}`}
                ref={iframeRef}
                width="60%"
                title="video">
            </iframe>
        </div>
    );
};

export default Trailer;