import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEraser, faKey, faDiceSix, faThumbTack, faPumpSoap, faChessKnight, faScrewdriver, faBell, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons'

const data = [
    {
        id: 1,
        heading: 'eraser',
        icon: <FontAwesomeIcon className='fawesome' icon={faEraser} />,
        headerName: 'Household Items',
        found: true
    },
    {
        id: 2,
        heading: 'dice',
        icon: <FontAwesomeIcon className='fawesome' icon={faDiceSix} />,
        headerName: 'Household Items',
        found: false
    },
    {
        id: 3,
        heading: 'key',
        icon: <FontAwesomeIcon className='fawesome' icon={faKey} />,
        headerName: 'Household Items',
        found: true
    },
    {
        id: 4,
        heading: 'knight',
        icon: <FontAwesomeIcon className='fawesome' icon={faChessKnight} />,
        headerName: 'Household Items',
        found: false
    },
    {
        id: 5,
        heading: 'thumb tack',
        icon: <FontAwesomeIcon className='fawesome' icon={faThumbTack} />,
        headerName: 'Household Items',
        found: false
    },
    {
        id: 6,
        heading: 'screw driver',
        icon: <FontAwesomeIcon className='fawesome' icon={faScrewdriver} />,
        headerName: 'Household Items',
        found: false
    },
    {
        id: 7,
        heading: 'sanitizer',
        icon: <FontAwesomeIcon className='fawesome' icon={faPumpSoap} />,
        headerName: 'Household Items',
        found: false
    },
    {
        id: 8,
        heading: 'bell',
        icon: <FontAwesomeIcon className='fawesome' icon={faBell} />,
        headerName: 'Household Items',
        found: false
    },
    {
        id: 9,
        heading: 'puzzle piece',
        icon: <FontAwesomeIcon className='fawesome' icon={faPuzzlePiece} />,
        headerName: 'Household Items',
        found: false
    }
]

export default data;










