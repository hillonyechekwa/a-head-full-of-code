import React from 'react';
import Nav from '../navigation'
import '../../styles/index.scss'

const Default = ({children}) => {
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

