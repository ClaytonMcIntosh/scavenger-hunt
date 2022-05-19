import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEraser, faKey, faDiceSix, faThumbTack, faPumpSoap, faChessKnight, faScrewdriver, faBell, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons'

const data = [
    {
        id: 1,
        img: require("../assets/img/household/clock.jpg"),
        heading: 'eraser',
        icon: <FontAwesomeIcon className='fawesome' icon={faEraser} />,
        headerName: 'Household Items',
        found: true
    },
    {
        id: 2,
        img: require("../assets/img/household/clippers.jpg"),
        heading: 'dice',
        icon: <FontAwesomeIcon className='fawesome' icon={faDiceSix} />,
        headerName: 'Household Items',
        found: false
    },
    {
        id: 3,
        img: require("../assets/img/household/key.jpg"),
        heading: 'key',
        icon: <FontAwesomeIcon className='fawesome' icon={faKey} />,
        headerName: 'Household Items',
        found: true
    },
    {
        id: 4,
        img: require("../assets/img/household/leaf.jpg"),
        heading: 'knight',
        icon: <FontAwesomeIcon className='fawesome' icon={faChessKnight} />,
        headerName: 'Household Items',
        found: false
    },
    {
        id: 5,
        img: require("../assets/img/household/lego.jpg"),
        heading: 'thumb tack',
        icon: <FontAwesomeIcon className='fawesome' icon={faThumbTack} />,
        headerName: 'Household Items',
        found: false
    },
    {
        id: 6,
        img: require("../assets/img/household/peg.jpg"),
        heading: 'screw driver',
        icon: <FontAwesomeIcon className='fawesome' icon={faScrewdriver} />,
        headerName: 'Household Items',
        found: false
    },
    {
        id: 7,
        img: require("../assets/img/household/sanitizer.jpg"),
        heading: 'sanitizer',
        icon: <FontAwesomeIcon className='fawesome' icon={faPumpSoap} />,
        headerName: 'Household Items',
        found: false
    },
    {
        id: 8,
        img: require("../assets/img/household/spoon.jpg"),
        heading: 'bell',
        icon: <FontAwesomeIcon className='fawesome' icon={faBell} />,
        headerName: 'Household Items',
        found: false
    },
    {
        id: 9,
        img: require("../assets/img/household/stapler.jpg"),
        heading: 'puzzle piece',
        icon: <FontAwesomeIcon className='fawesome' icon={faPuzzlePiece} />,
        headerName: 'Household Items',
        found: false
    }
]

export default data;










