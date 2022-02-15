import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'

const ProfileForm = (props) => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = async data => console.log(data)

    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    return (
        <form className='' onSubmit={handleSubmit(onSubmit)}>
            <input 
                {...register('email', { required: 'Ce champ est obligatoire'})}
                placeholder='Email'
                value={props.email}
            />
            <input 
                {...register('firstName', { required: 'Ce champ est obligatoire', minLength: { value: 2, message: 'La taille minimale est de 4'}, maxLength: { value: 20, message: 'La taille maximale est de 20'} })}
                placeholder="Votre prénom"
                value={capitalize(props.firstName)}
            />

            <input 
                {...register('lastName', { required: 'Ce champ est obligatoire', minLength: { value: 2, message: 'La taille minimale est de 4'}, maxLength: { value: 30, message: 'La taille maximale est de 30'} })}
                placeholder="Votre nom de famille"
                value={capitalize(props.lastName)}
            />
            <NavLink to={"edit"} className="profile-form-btn">
                <button type='submit'>Modifier mes informations</button>
            </NavLink>
        </form>
    )
}

export default ProfileForm;