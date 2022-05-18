import { useState } from 'react'

const Card = ({ img, heading, found }) => {

    const [message, setMessage] = useState('');

    const handleChange = event => {
        setMessage(event.target.value);
    };

    const handleClick = event => {
        event.preventDefault();

        // 👇️ value of input field
        console.log('old value: ', message);

        // 👇️ set value of input field
        setMessage('New value');
    };



    return (
        <div className='square'>
            <img className="card-image" src={img} alt="" width="20%" />
            <h3>{heading} </h3>
            <div className='found-box'>
                {found ? <>
                    <div className='found-check'> x </div>
                    <div>found</div>
                </>
                    : ''}
                {!found ? <>
                    <div>not found</div>


                    <div>
                        <input
                            type="text"
                            id="message"
                            name="message"
                            onChange={handleChange}
                            value={message}
                        />

                        <h2>Message: {message}</h2>

                        <button onClick={handleClick}>Click</button>
                    </div>


                </>
                    : ''}
            </div>
        </div >
    )
}

export default Card


