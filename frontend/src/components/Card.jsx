import React from 'react'

const Card = ({ img, heading }) => {
    return (
        <div className='card'>
            <img className="card-image" src={img} alt="" width="100%" />
            <h3>{heading} </h3>

            <br />
        </div >
    )
}

export default Card


// const Card = (img, name, key) => {
//     return (
//         <div className="square">
//             <img src={img} alt="" width="100%" />
//             <p>{key}</p>
//             <p>{name}</p>


//         </div>
//     )
// }