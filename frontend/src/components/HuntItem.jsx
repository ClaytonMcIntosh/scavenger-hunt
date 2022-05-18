import { useDispatch } from 'react-redux'
import { deleteHunt } from '../features/hunts/huntSlice'

function HuntItem({ hunt }) {
    const dispatch = useDispatch()

    return (
        <div className='hunt'>
            <div>{new Date(hunt.createdAt).toLocaleString('en-US')}</div>
            <h2>{hunt.text}</h2>
            <button onClick={() => dispatch(deleteHunt(hunt._id))} className='close'>
                X
            </button>
        </div>
    )
}

export default HuntItem
