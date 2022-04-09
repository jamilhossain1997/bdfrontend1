import React,{useEffect} from 'react';
import {useHistory} from 'react-router-dom'; 

const Proceted = (props) => {
    const Cmp = props.Cmp
    const navigate = useHistory();
    // useEffect(() => {
    //     if(!localStorage.getItem('user-info')){
    //         navigate.push("/register");
    //     }
    //  }, [])

    return (
        <div>
            <Cmp/>
        </div>
    )
}

export default Proceted
