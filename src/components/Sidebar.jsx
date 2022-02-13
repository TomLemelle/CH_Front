import { useContext } from "react"
import Auth from "../context/Auth"
import { NavLink } from 'react-router-dom';

const Sidebar = () => {

    const {isAuthenticated, setIsAuthenticated} = useContext(Auth)

    const handleLogout = () => {
        setIsAuthenticated(false)
    }

    return (
        <section className="sidebar">
            <div className="user-top">
                <img className='user-image' src='/assets/user-face.png' alt='user' width={86} height={86}/>
                
                <div className='user-name'>
                    Alvaro Guerra <img src='/assets/chevron-down.png' alt='icon chevron vers le bas' width={13} height={7} />
                </div>
            </div>

            <ul className="sidebar-links">
                <li className="links">
                    <img src='/assets/postes.png' alt='icon poste' width={24} height={24} />
                    <NavLink exact to="/posts" href='#'>
                        <button className='link'>Postes / Annonces</button>
                    </NavLink>
                </li>
                <li className="links">
                    <img src='/assets/bell.png' alt='icon notification' width={24} height={24} />
                    <NavLink href='#'>
                        <button className='link'>Notifications</button>
                    </NavLink>
                </li>
                <li className="links">
                    <img src='/assets/upload.png' alt='icon upload' width={24} height={24} />
                    <NavLink href='#'>
                        <button className='link'>Déposer un fichier</button>
                    </NavLink>
                </li>
                <li className="links">
                    <img src='/assets/messagerie.png' alt='icon messagerie' width={24} height={24} />
                    <NavLink href='#'>
                        <button className='link'>Messagerie</button>
                    </NavLink>
                </li>
                <li className="links">
                    <img src='/assets/calendar.png' alt='icon calendrier' width={24} height={24} />
                    <NavLink href='#'>
                        <button className='link'>Calendrier</button>
                    </NavLink>
                </li>
            </ul>

            <div className="sidebar-disconnect-link">
               <img src='/assets/disconnect.png' alt='icon déconnexion' width={24} height={24} />
                <NavLink href='#'>
                    <button className='link' onClick={handleLogout}>Se déconnecter</button>
                </NavLink>
            </div>
        </section>
    )
}

export default Sidebar;