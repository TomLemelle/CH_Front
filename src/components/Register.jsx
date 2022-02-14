import { forwardRef, useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import Auth from '../context/Auth'
import { createUser } from '../Utils/Api/AuthApi'

const Register = ({children, onClick}, ref) => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const {isAuthenticated, setIsAuthenticated} = useContext(Auth)
    
    const onSubmit = async data => {
        try {
            console.log(data);
            data.roles = ['ROLE_USER']
            await createUser(data)
        } catch ({ response }) {
            console.log(response)
        }
    }

    const [wrongPassword, setWrongPassword] = useState(false)

    return (
        <form className='form-wrapper' onSubmit={handleSubmit(onSubmit)}>

            {children}

            <div className='google-field' onClick={() => console.log('cc')}>
                <a href="#"><img src='/assets/google-icon.png' alt='google icon' style={{ paddingRight: '5px' }} />Continuer avec google</a>
            </div>


            <div className='ou-field'>ou</div>

            <input 
                {...register('email', { required: 'Ce champ est obligatoire' })}
                placeholder='Email'
                className='form-fields'
            />
            <input 
                {...register('firstName', { required: 'Ce champ est obligatoire', minLength: { value: 2, message: 'La taille minimale est de 4'}, maxLength: { value: 20, message: 'La taille maximale est de 20'} })}
                placeholder="Votre prénom"
                className='form-fields'
            />

            <input 
                {...register('lastName', { required: 'Ce champ est obligatoire', minLength: { value: 2, message: 'La taille minimale est de 4'}, maxLength: { value: 30, message: 'La taille maximale est de 30'} })}
                placeholder="Votre nom de famille"
                className='form-fields'
            />

            <input 
                {...register('password', { required: 'Ce champ est obligatoire', minLength: { value: 6, message: 'La taille minimale est de 6'}, maxLength: { value: 30, message: 'La taille maximale est de 30'} })}
                placeholder='Mot de passe'
                className='form-fields'
                type='password'
            />
            
            { wrongPassword && <span>Les mots de passe sont différents</span> }
            
            <button type='submit' className='form-submit-field'>S&apos;inscrire</button>
            <button type='button' ref={ref} className='form-account-field' name='register' onClick={onClick}>Se connecter avec un compte existant</button>
        </form>
    )
}

export default forwardRef(Register)
