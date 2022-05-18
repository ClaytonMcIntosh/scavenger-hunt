import React from 'react'

const Card = ({ img, heading, found }) => {
    return (
        <div className='square'>
            <img className="card-image" src={img} alt="" width="100%" />
            <h3>{heading} </h3>
            {found ? <div>found</div> : ''}
            {!found ? <div>not found</div> : ''}
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


