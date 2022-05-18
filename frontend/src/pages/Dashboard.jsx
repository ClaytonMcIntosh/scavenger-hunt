import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import GoalForm from '../components/GoalForm'
import GoalItem from '../components/GoalItem'
import Spinner from '../components/Spinner'
import { getGoals, reset } from '../features/goals/goalSlice'
import { getHunts } from '../features/hunts/huntSlice'
import TestClick from '../components/TestClick'
import HuntItem from '../components/HuntItem'

function Dashboard() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)
    const { goals, isLoading, isError, message } = useSelector(
        (state) => state.goals
    )

    const { hunts, isLoading: isLoadingHunts, isError: isErrorHunts, message: messageHunts } = useSelector(
        (state) => state.hunts
    )

    useEffect(() => {
        if (isError || isErrorHunts) {
            console.log(message, messageHunts)
        }

        if (!user) {
            navigate('/main')
        }

        dispatch(getGoals())
        dispatch(getHunts())

        return () => {
            dispatch(reset())
        }
    }, [user, navigate, isError, message, dispatch, messageHunts, isErrorHunts])

    if (isLoading || isLoadingHunts) {
        return <Spinner />
    }
    return (
        <>
            <section className='heading'>
                <h1>Welcome {user && user.name}</h1>
                <p>Goals Dashboard</p>
            </section>

            <GoalForm />

            <section className='content'>
                {goals.length > 0 ? (
                    <div className='goals'>
                        {goals.map((goal) => (
                            <GoalItem key={goal._id} goal={goal} />
                        ))}
                    </div>
                ) : (
                    <h3>You have no saved Goals</h3>
                )}
            </section>

            <TestClick />

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


            {/* <br></br>
            <p> Below is data from the Hunts database. Ignore</p>
            <p>==={hunts.length && hunts[0].text}===</p> */}

        </>
    )
}

export default Dashboard
