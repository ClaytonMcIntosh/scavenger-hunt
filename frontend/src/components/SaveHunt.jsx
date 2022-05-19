import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createHunt } from '../features/hunts/huntSlice'

function SaveHunt() {
    const [text, setText] = useState('')

    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()

        dispatch(createHunt({ text }))
        setText('')
    }

    return (
        <section className='form'>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label htmlFor='text'>Test:</label>
                    <input
                        type='text'
                        name='text'
                        id='text'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <button className='btn btn-block-short' type='submit'>
                        Add Data
                    </button>
                </div>
            </form>
        </section>
    )
}

export default SaveHunt
