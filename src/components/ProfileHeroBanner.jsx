import { useEffect, useState } from "react"
import AsyncLocalStorage from '@createnextapp/async-local-storage'

const ProfileHeroBanner = (props) => {

    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    return (
        <div className="profile-herobanner">
            <div className="profile-img">
                <img src="/assets/user-face.png" alt="tête de l'utilisateur" />
            </div>
            <div className="profile-info-herobanner">
                <h1>{capitalize(props.firstName)} {capitalize(props.lastName)}</h1>
                {props.roles && <span>{props.roles[0]}</span>}
            </div>
        </div>
    )
}

export default ProfileHeroBanner;