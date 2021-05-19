import React from 'react';
import Banner from '../logobanner'
import Navigation from '../navigation'
import Footer from '../footer'

const MainLayout = ({children}) => {
    return (
        <div>
            <Banner />
            <Navigation />
            <div>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default MainLayout;

