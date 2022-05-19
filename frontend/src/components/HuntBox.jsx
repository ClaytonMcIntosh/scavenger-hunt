import Card from './Card'


const HuntBox = (props) => {
    return (
        <>
            <h2>What to find:</h2>
            <div className="square-container">
                {props.data.map((element) => {
                    return (
                        <Card key={element.id} img={element.img} heading={element.heading} found={element.found} icon={element.icon} />
                    );
                })
                }
            </div >
        </>
    )
}

export default HuntBox


