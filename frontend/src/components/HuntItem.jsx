import { useDispatch } from 'react-redux'
import { deleteHunt } from '../features/hunts/huntSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function HuntItem({ hunt }) {
    const dispatch = useDispatch()

    return (
        <div className='saved-box' >
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
    )
}

export default HuntItem
