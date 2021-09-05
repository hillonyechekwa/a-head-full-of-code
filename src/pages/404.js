import React from 'react';
import {Link} from 'gatsby'


const NotFound = () => {
    return (
        <>
        <h1>This page can be found.</h1>
        <p>Please click <Link to="/">here</Link> to got back to the homepage</p>
        </>
    )
}

export default NotFound
