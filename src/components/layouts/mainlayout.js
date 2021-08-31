import React from 'react';
import Nav from '../navigation'

const MainLayout = ({children}) => {
    return (
        <div className="">
            <Nav/>
            <main>
                {children}
            </main>
        </div>
    )
}

export default MainLayout;

