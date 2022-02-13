import { useContext, useEffect, useState } from "react"
import Auth from "../context/Auth"
import { getJWT, decodeJWT, getUserInfo, updateUserInfo } from "../Utils/Api/AuthApi"
import axios from "axios"
import { getToken, getUserData } from "../Utils/Api/LocalStorage"
import { useForm } from 'react-hook-form'
import Sidebar from "../components/Sidebar"

export default function Profile () {

    const [user, setUser] = useState([])

    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = async data => {
        try {
            const token = getToken().split('"').join('"');
            const response = await updateUserInfo(user.id, data, token)
            console.log(response);
        } catch ({ response }) {
            console.log(response)
        }
    }

    useEffect(() => {
        setUser(JSON.parse(getUserData()))
    }, [])


    return (
        <section className="profile">
            <h1>Profile</h1>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>email</th>
                        <th>role</th>
                        <th>first name</th>
                        <th>last name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {Object.values(user).map(user => (
                            <td>{user}</td>
                        ))}
                    </tr>
                </tbody>
            </table>

            <form className='form-wrapper' onSubmit={handleSubmit(onSubmit)}>

            <input 
                {...register('email', { required: 'Ce champ est obligatoire'})}
                placeholder='Email'
                className='form-fields'
            />
            <input 
                {...register('firstName', { required: 'Ce champ est obligatoire'})}
                placeholder='Prénom'
                className='form-fields'
            />
            <input 
                {...register('lastName', { required: 'Ce champ est obligatoire'})}
                placeholder='Nom de famille'
                className='form-fields'
            />
            <button type='submit' className='form-submit-field'>Modifier</button>
            </form>

        </section>
    )
}