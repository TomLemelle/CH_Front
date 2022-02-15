import { useContext } from "react"
import { Navigate } from "react-router-dom"
import Auth from "../../context/Auth"

const RouteGuard = ({children}) => {
    const {isAuthenticated} = useContext(Auth)

    return isAuthenticated === true ? children : <Navigate to="/" replace />
}

export default RouteGuard;