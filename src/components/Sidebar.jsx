import { useContext, useState, useEffect } from "react"
import Auth from "../context/Auth"
import { NavLink, useNavigate } from 'react-router-dom';
import { removeToken, removeUserData } from "../Utils/Api/LocalStorage";
import Index from "../pages/Index";
import Upload from "../pages/Upload";
import Profile from "../pages/Profile";
import { getUserData } from "../Utils/Api/LocalStorage"

const Sidebar = () => {

    const {isAuthenticated, setIsAuthenticated} = useContext(Auth)
    const navigate = useNavigate()
    const [user, setUser] = useState([])


    const handleLogout = () => {
        removeToken()
        removeUserData()
        setIsAuthenticated(false)
        navigate('/')
    }

    useEffect(() => {
        setUser(JSON.parse(getUserData()))
    }, [])

    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    return (
        <section className="sidebar">
            <div className="user-top">
                <img className='user-image' src='/assets/user-face.png' alt='user' width={86} height={86}/>
                
                <div className='user-name'>
                <NavLink component={Profile} to="/profile">
                    {capitalize(user.firstName)} {capitalize(user.lastName)} <img src='/assets/chevron-down.png' alt='icon chevron vers le bas' width={13} height={7} />
                </NavLink>
                </div>
            </div>

            <ul className="sidebar-links">
                <li className="links">
                    <img src='/assets/postes.png' alt='icon poste' width={24} height={24} />
                    <NavLink component={Index} to="/posts">
                        <button className='link'>Postes / Annonces</button>
                    </NavLink>
                </li>
                <li className="links">
                    <img src='/assets/bell.png' alt='icon notification' width={24} height={24} />
                    <NavLink component={Index} to="/notifications">
                        <button className='link'>Notifications</button>
                    </NavLink>
                </li>
                <li className="links">
                    <img src='/assets/upload.png' alt='icon upload' width={24} height={24} />
                    <NavLink component={Upload} to="/upload">
                        <button className='link'>Déposer un fichier</button>
                    </NavLink>
                </li>
                <li className="links">
                    <img src='/assets/messagerie.png' alt='icon messagerie' width={24} height={24} />
                    <NavLink component={Index} to="/messaging">
                        <button className='link'>Messagerie</button>
                    </NavLink>
                </li>
                <li className="links">
                    <img src='/assets/calendar.png' alt='icon calendrier' width={24} height={24} />
                    <NavLink component={Index} to="/calendar">
                        <button className='link'>Calendrier</button>
                    </NavLink>
                </li>
            </ul>

            <div className="sidebar-disconnect-link">
               <img src='/assets/disconnect.png' alt='icon déconnexion' width={24} height={24} />
                <button className='link' onClick={handleLogout}>Se déconnecter</button>
            </div>
        </section>
    )
}

export default Sidebar;