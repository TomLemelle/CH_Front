import { useRef } from 'react';

const UploadFile = () => {

    const uploadFileRef = useRef(null);
    const handleUpload = () => {
        uploadFileRef.current.click()
    }

    return (
        <>
            <img className='upload-icon' src='/assets/upload-file.png' alt='upload icon' width={100} height={95} onClick={handleUpload} />
            <div className='upload-help'>faite glisser et déposer des fichiers ici pour les envoyer</div>
            <label className='upload'>
                <input className='upload-field' type='file' name='upload' ref={uploadFileRef} required/>
                <img src='/assets/file.png' alt='file upload icon' width={24} height={24} /><span className='upload-browse-msg'>Parcourir les fichiers</span>
            </label>
            <div className='upload-information'>Taille maximum: <span>64m</span></div>
        </>  
    )
}

export default UploadFile;