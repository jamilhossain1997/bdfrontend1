import React,{useEffect} from 'react';
import Header from './Header';
import { useHistory } from 'react-router-dom';
const Home = () => {
    const history=useHistory();
    useEffect(() => {
        if(!localStorage.getItem('user-info')){
            history.push('/login');
        }
    }, [])
    return (
        <div>
            <Header/>
            <h1>jamil</h1>
        </div>
    )
}

export default Home
