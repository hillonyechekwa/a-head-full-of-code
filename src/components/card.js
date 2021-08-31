import React from 'react'


const Card = ({content, className}) => {
    return (
        <div className={`${className}`} role="card">
            {content}
        </div>
    )
}

export default Card
