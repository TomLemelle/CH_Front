import { useForm } from 'react-hook-form'

const CreatePostModal = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data)

    return (
        <form className="create-post" onSubmit={handleSubmit(onSubmit)}>
            <input 
                {...register('title', { required: 'Ce champ est obligatoire' })}
                placeholder='Titre'
                className='form-fields'
            />
            <input 
                {...register('description', { required: 'Ce champ est obligatoire', minLength: { value: 4, message: 'La taille minimale est de 4'} })}
                placeholder='Description du post'
                className='form-fields'
            />
        </form>
    )
}

export default CreatePostModal;