import React from 'react'

const Card = ({ img, heading }) => {
    return (
        <div className='square'>
            <img className="card-image" src={img} alt="" width="100%" />
            <h3>{heading} </h3>

            <div className='found-box'>
                <div className='found-text'> not yet found
                </div>
                <div className='found-check'> x
                </div>
            </div>
        </div >
    )
}

export default Card


