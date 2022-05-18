import React, { useState } from 'react'

const Card = ({ img, heading, found }) => {

    const [existence, setExistence] = useState(false)

    function foundItem() {
        setExistence(prevExistence => !prevExistence)
    }

    return (
        <div className='square'>
            <img className="card-image" src={img} alt="" width="20%" />
            <h3>{heading} </h3>
            <div className='found-box'>
                <span> {existence} </span>
                {existence === false ? (
                    <div >
                        Lost
                    </div>
                ) : (
                    <div >
                        Found
                    </div>
                )
                }
                <button onClick={foundItem}> Found </button>
            </div>



        </div >
    )
}

export default Card
export { }


