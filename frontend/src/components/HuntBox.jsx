import Card from './Card'


const HuntBox = (props) => {
    return (
        <>
            <h1> {props.headerName} </h1>
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


