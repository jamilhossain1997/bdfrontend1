import React,{useEffect} from 'react';
import {useHistory} from 'react-router-dom';
const Home = () => {
    const history = useHistory();
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            history.push('/login')
        }
    }, [])
    return (
        <div>
            <h1>tutul</h1>
        </div>
    )
}

export default Home
