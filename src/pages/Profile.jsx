import ProfileForm from "../components/Profile/ProfileForm"
import ProfileHeroBanner from "../components/Profile/ProfileHeroBanner"
import AsyncLocalStorage from '@createnextapp/async-local-storage'
import { useEffect, useState } from "react"
import { useForm } from 'react-hook-form'
import Sidebar from "../components/Sidebar"

export default function Profile () {

    const [user, setUser] = useState([])

    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = async data => console.log(data)

    const getData = async () => {
        try {
            let getItem = await AsyncLocalStorage.getItem('user');
            setUser(JSON.parse(getItem))
        } catch(e) {
            console.error('error: ', e)
        }
    }

    useEffect(() => {
        (async () => await getData())();
    }, [])

    return (
        <section className="profile">
            <Sidebar />
            <div className="content-wrapper">
                <ProfileHeroBanner {...user}/>
                <div className="profile-data-form">
                    <ProfileForm {...user}/>                    
                </div>
            </div>
            
        </section>
    )
}