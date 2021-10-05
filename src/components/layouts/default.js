import React from 'react';
import Nav from '../navigation';
import '../../styles/index.scss';


const Default = ({ children }) => {

    // const backgroundStyles = {
    //     backgroundImage: `url(${Background})`,
    //     backgroundPosition: "center",
    //     backgroundRepeat: "repeat",
    //     backgroundSize: "cover",
    // }

    return (
        <div className="layout-wrapper">
            <Nav/>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Default;

