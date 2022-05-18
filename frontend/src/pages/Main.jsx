import HuntBox from "../components/HuntBox";
import data from "../components/data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEraser, faKey, faDiceSix, faThumbTack, faPumpSoap, faChessKnight, faScrewdriver, faBell, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons'

const Main = () => {



    let categories = []

    for (let i = 0; i < data.length; i++) {
        categories.push(data[i].headerName)
    }

    let uniqueCategories = [...new Set(categories)]

    return (
        <div>
            {uniqueCategories.map((catName, index) => {
                return (
                    <HuntBox key={index} headerName={catName} data={data.filter((img) => img.headerName === catName)} />

                )
            })}
            <h1>
                <FontAwesomeIcon icon={faEraser} />
                <FontAwesomeIcon icon={faKey} />
                <FontAwesomeIcon icon={faDiceSix} />
                <FontAwesomeIcon icon={faThumbTack} />
                <FontAwesomeIcon icon={faPumpSoap} />
                <FontAwesomeIcon icon={faChessKnight} />
                <FontAwesomeIcon icon={faScrewdriver} />
                <FontAwesomeIcon icon={faBell} />
                <FontAwesomeIcon icon={faPuzzlePiece} />

            </h1>
        </div>
    )
}


export default Main;