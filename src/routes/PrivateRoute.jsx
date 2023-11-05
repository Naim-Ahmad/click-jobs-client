import PropTypes from 'prop-types'
import { useLocation, useNavigate } from 'react-router-dom'
import MySpinner from '../components/MySpinner'
import useAuth from '../hooks/useAuth'

export default function PrivateRoute({children}) {
    const {user, loading} = useAuth()
    const navigate = useNavigate()
    const {pathname} = useLocation()
    
    if(loading){
        return <MySpinner/>
    }

    if(!user){
        return navigate('/sign-in', {
            state: pathname
        })
    }

    return children
}

PrivateRoute.propTypes = {
    children: PropTypes.node
}
