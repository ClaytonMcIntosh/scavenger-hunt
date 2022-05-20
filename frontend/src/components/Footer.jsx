import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

function Footer() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

    return (
        <header className='footer'>
            <ul>
                <li>
                </li>
                {user ? (
                    <li>

                        <div onClick={onLogout}>
                            <p className='purple'><FaSignOutAlt /> Logout</p>
                        </div>
                    </li>
                ) : (
                    <>
                        <div className='footer-container'>
                            <li>
                                <Link to='/login'>
                                    <FaSignInAlt /> Login
                                </Link>
                            </li>
                            <li>
                                <Link to='/register'>
                                    <FaUser /> Register
                                </Link>
                            </li>
                        </div>
                    </>
                )}
            </ul>
        </header>
    )
}

export default Footer
