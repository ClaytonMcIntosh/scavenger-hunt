import { useDispatch } from 'react-redux'
import { deleteHunt } from '../features/hunts/huntSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'

function HuntItem({ hunt }) {
    const dispatch = useDispatch()

    const [existence, setExistence] = useState(false)

    function saveFoundItem() {
        setExistence(prevExistence => !prevExistence)
    }

    return (
        <div>
            {existence === false ? (
                <div className='saved-box' onClick={saveFoundItem} >
                    <div className='icon-box-saved'>
                        <div className='icon-saved'><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
                        <div className='heading-box'>
                            <h3>{hunt.text}</h3>
                        </div>
                        <button onClick={() => dispatch(deleteHunt(hunt._id))} className='btn-save'>
                            x
                        </button>
                    </div>
                </div >
            ) : (
                <div className='saved-box-b' onClick={saveFoundItem} >
                    <div className='icon-box-saved-b'>
                        <div className='icon-saved-b'><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
                        <div className='heading-box-b'>
                            <h3 className="hunt-text">{hunt.text}</h3>
                        </div>
                        <button onClick={() => dispatch(deleteHunt(hunt._id))} className='btn-save'>
                            x
                        </button>
                    </div>
                </div >)

            }
        </div>
    )
}

export default HuntItem