import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'

const EditProfileForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = async data => console.log(data)

    return (
        <>
        <NavLink to="/profile">
            Revenir en arrière
        </NavLink>
        <form className='' onSubmit={handleSubmit(onSubmit)}>
            <input 
                {...register('email', { required: 'Ce champ est obligatoire'})}
                placeholder='Email'
            />
            <input 
                {...register('firstName', { required: 'Ce champ est obligatoire', minLength: { value: 2, message: 'La taille minimale est de 4'}, maxLength: { value: 20, message: 'La taille maximale est de 20'} })}
                placeholder="Votre prénom"
            />

            <input 
                {...register('lastName', { required: 'Ce champ est obligatoire', minLength: { value: 2, message: 'La taille minimale est de 4'}, maxLength: { value: 30, message: 'La taille maximale est de 30'} })}
                placeholder="Votre nom de famille"
            />
            <button type='submit'>Modifier mes informations</button>
        </form>
        </>
    )
}

export default EditProfileForm;