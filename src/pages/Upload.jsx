import { useContext, useEffect } from 'react';
import Sidebar from '../components/Sidebar'
import Tabs from '../components/Tabs';
import Auth from '../context/Auth';

export default function Upload() {

    return (
        <section className="upload">
            <Sidebar />
            <div className="content-wrapper">
                <Tabs />
            </div>
        </section>
    )

}