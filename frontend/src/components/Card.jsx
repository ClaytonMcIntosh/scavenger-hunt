const Card = ({ img, heading, found }) => {



    const handleClick = event => {
        event.preventDefault();

        console.log(found)
        found = true;
        console.log(found)

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

                        <button onClick={handleClick}>Click</button>
                    </div>


                </>
                    : ''}
            </div>
        </div >
    )
}

export default Card



