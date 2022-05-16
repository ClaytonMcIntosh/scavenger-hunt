import Card from './Card'

const HuntBox = (props) => {
    return (
        <div className="square-container">
            <h1> {props.headerName} </h1>
            {props.data.map((element) => {
                return (
                    <Card key={element.id} img={element.img} heading={element.heading} />
                );
            })
            }
        </div >
    )
}

export default HuntBox
