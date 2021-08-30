import React from 'react';

const MainLayout = ({children}) => {
    return (
        <div className="">
            <main>
                {children}
            </main>
        </div>
    )
}

export default MainLayout;

