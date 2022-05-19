import React, { useState } from 'react'


const Card = ({ img, heading, found, icon }) => {

    const [existence, setExistence] = useState(false)

    function foundItem() {
        setExistence(prevExistence => !prevExistence)
    }

    return (
        <div className='square' onClick={foundItem}>
            <div className='found-box'>

                {existence === false ? (
                    <div >
                        <div className='icon-box'>
                            <div className='icon'>{icon}</div>
                        </div>
                        <div className='heading-box'>
                            <h3>{heading} </h3>
                        </div>
                    </div>
                ) : (
                    <div >
                        <div className='icon-box-found'>
                            <div className='icon-found'>{icon}</div>
                        </div>
                        <div className='heading-box-found'>
                            <h3>{heading} </h3>
                        </div>
                    </div>
                )
                }
            </div>
        </div >

    )
}

export default Card
export { }



