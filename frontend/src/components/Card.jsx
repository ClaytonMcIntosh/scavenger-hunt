import React from 'react'

const Card = (img, name, key) => {
    return (
        <div className="square">
            <img src={img} alt="" width="100%" />
            <p>{key}</p>
            <p>{name}</p>


        </div>
    )
}

export default Card
