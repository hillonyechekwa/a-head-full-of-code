import React from 'react';
import Banner from '../logobanner'
import Navigation from '../navigation'
import Footer from '../footer'

const MainLayout = ({children}) => {
    return (
        <div className="outer-wrapper">
            <Banner />
            <Navigation />
            <div className="child-wrapper">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default MainLayout;

