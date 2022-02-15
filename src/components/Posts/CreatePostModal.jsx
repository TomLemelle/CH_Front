import { useForm } from 'react-hook-form'

const CreatePostModal = (props) => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data)

    return (
        <form className="create-post" onSubmit={handleSubmit(onSubmit)}>
            <input 
                {...register(props.title, { required: 'Ce champ est obligatoire' })}
                placeholder={props.placeholder}
                className='form-fields'
            />
            <textarea 
                {...register(props.description, { required: 'Ce champ est obligatoire', minLength: { value: 4, message: 'La taille minimale est de 4'} })}
                placeholder={props.textarea}
                className='form-fields'
            ></textarea>
        </form>
    )
}

export default CreatePostModal;