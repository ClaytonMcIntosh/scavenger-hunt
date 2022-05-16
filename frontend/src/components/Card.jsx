import React from 'react'

const Card = ({ img, heading }) => {
    return (
        <div className='square'>
            <img className="card-image" src={img} alt="" width="100%" />
            <h3>{heading} </h3>

            <br />
        </div >
    )
}

export default Card


