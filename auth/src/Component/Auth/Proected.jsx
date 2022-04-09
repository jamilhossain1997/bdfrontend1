import React,{useEffect} from 'react';
import {useHistory} from 'react-router-dom'; 

const Proceted = (props) => {
    const Cmp = props.Cmp
    const history = useHistory();
    useEffect(() => {
        if(!localStorage.getItem('token')){
            history.push("/register");
        }
     }, [])

    return (
        <div>
            <Cmp/>
        </div>
    )
}

export default Proceted