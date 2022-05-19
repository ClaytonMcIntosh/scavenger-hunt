import React, { useState } from 'react'


const Card = ({ img, heading, found, icon }) => {

    const [existence, setExistence] = useState(false)

    function foundItem() {
        setExistence(prevExistence => !prevExistence)
    }

    return (
        <div className='square'>
            <div className='icon-box'>
                <div className='icon'>{icon}</div>
            </div>
            <div className='heading-box'>
            <h3>{heading} </h3>
            </div>
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



