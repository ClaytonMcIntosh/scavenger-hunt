import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../components/Spinner'
import { reset, getHunts } from '../features/hunts/huntSlice'
import SaveHunt from '../components/SaveHunt'
import HuntItem from '../components/HuntItem'

function Dashboard() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)

    const { hunts, isLoading: isLoadingHunts, isError: isErrorHunts, message: messageHunts } = useSelector(
        (state) => state.hunts
    )

    useEffect(() => {
        if (isErrorHunts) {
            console.log(messageHunts)
        }

        if (!user) {
            navigate('/main')
        }

        dispatch(getHunts())

        return () => {
            dispatch(reset())

        }
    }, [user, navigate, dispatch, messageHunts, isErrorHunts])

    if (isLoadingHunts) {
        return <Spinner />
    }
    return (
        <>
            <section className='heading'>
                <h2>Welcome {user && user.name}</h2>
            </section>

            <SaveHunt />

            <section className='content'>
                {hunts.length > 0 ? (
                    <div className='goals'>
                        {hunts.map((hunt) => (
                            <HuntItem key={hunt._id} hunt={hunt} />
                        ))}
                    </div>
                ) : (
                    <h3>You have no saved Hunts</h3>
                )}
            </section>


        </>
    )
}

export default Dashboard
