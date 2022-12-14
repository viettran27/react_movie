import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';

const Layout = ({ children, hiddenSearch }) => {
    return (
        <>
            <Header hiddenSearch={hiddenSearch ? hiddenSearch : ''} />
            <div className="mt-20 px-20">
                {children}
            </div>
            <Footer />
        </>
    );
};

export default Layout;