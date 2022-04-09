import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';


const Profile = (props) => {
    const history = useHistory();
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            history.push('/login')
        }
    }, [])
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className=' col-lg-4 offset-lg-4 bg-Secondary mt-4'>

                        <ul className='list-group'>
                            <li className='list-group-item'><h3 className='text-center'>My Profile</h3></li>
                            <li className='list-group-item'>Name:{props.user.name}</li>
                            <li className='list-group-item'>Email:{props.user.email}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
