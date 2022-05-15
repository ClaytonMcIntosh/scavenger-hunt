import Card from './Card'

const HuntBox = (props) => {
    return (
        <div className="square-container">
            {props.data.map((element) => {
                return (
                    <Card key={element.id} name={element.name} img={element.img} />
                );
            })}
        </div>
    )
}

export default HuntBox
