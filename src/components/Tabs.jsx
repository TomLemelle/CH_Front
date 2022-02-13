import { useState } from 'react';
import UploadFile from './Tabs/UploadFile';
import SeeFile from './Tabs/SeeFile';

const Tabs = (props) => {

    const [toggleState, setToggleState] = useState(1);

    return (
        <div className='tabs-container'>
            <div className='bloc-tabs'>
                 <div className={toggleState === 1 ? 'tab active-tab' : 'tab not-active'} onClick={() => setToggleState(1)}>Voir les fichiers</div>
                 <div className={toggleState === 2 ? 'tab active-tab' : 'tab not-active'} onClick={() => setToggleState(2)}>Déposer un fichier</div>
            </div>

             <div className='content-tabs'>
                 <div className={toggleState === 1 ? 'content active-content' : 'content'}>
                    <SeeFile />
                 </div>

                 <div className={toggleState === 2 ? 'content active-content active-upload' : 'content'}>
                    <UploadFile />
                 </div>
             </div>
        </div>
    )
}

export default Tabs;