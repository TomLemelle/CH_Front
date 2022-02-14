import Register from '../components/Register'
import Login from '../components/Login'
import CloseModal from '../components/CloseModal'

import { useEffect, useRef, useState } from 'react/cjs/react.development'
import { useContext } from 'react'
import Auth from '../context/Auth'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Index() {

    const [showLogin, setShowLogin] = useState(false)
    const [showRegister, setShowRegister] = useState(false)

    const loginRef = useRef(null)
    const registerRef = useRef(null)

    const handleClick = el => {
        if(el.target.className.split(' ')[1] == 'register') {
            setShowLogin(false)
            setShowRegister(true)
        } else {
            setShowRegister(false)
            setShowLogin(true)
        }
    }

    const displayModal = ref => {
        if(ref.current.name == 'register') {
            setShowRegister(false)
            setShowLogin(true)
        } else {
            setShowLogin(false)
            setShowRegister(true)
        }
    }

    const closeModal = () => {
        setShowRegister(false) || setShowLogin(false)
    }

    const {isAuthenticated, setIsAuthenticated} = useContext(Auth)
    let navigate = useNavigate()
    useEffect(() => {
        if(isAuthenticated) navigate('/profile')
    })

    return (
        <section className='home'>
            <ul className='index-page'>
                <li className='p-b-85'>
                    <h1>CENTRE HOSPITALIER DU <span>ROUVRAY</span></h1>
                </li>
                <li className='p-tb-85'>
                    <p>
                        application en ligne permettant le transfère de fichiers, facilite la communication entre tuteurs
                        et donne accès a un système de notifications pour les dates importantes
                    </p>
                </li>
                <li className='p-tb-85 register-li' style={{cursor: 'pointer'}} onClick={(e) => handleClick(e)}>
                    <a className="log-with-g register">S&apos;inscrire</a>
                </li>
                <li className='last-li-home' style={{cursor: 'pointer'}} onClick={(e) => handleClick(e)}>
                    <a className="log-with-g login">Déjà un compte ?</a>
                </li>
            </ul>

            {showRegister && <Register ref={registerRef} onClick={() => displayModal(registerRef)}>
                                <CloseModal onClick={() => closeModal()} />
                             </Register>}

            {showLogin &&   <Login ref={loginRef} onClick={() => displayModal(loginRef)}>
                                <CloseModal onClick={() => closeModal()} />
                            </Login>}
            
        </section>
    )
}

