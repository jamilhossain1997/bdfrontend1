import React from 'react';
import axios from 'axios';
import Header from './Header';
import { useState } from 'react';
import { useEffect } from 'react';
import {Link} from 'react-router-dom';

const Cardid = (props) => {

    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(`https://prm.scoutsbd.com/prm21/ecommerce-app/api/singelProduct/${props.match.params.id}`)
            .then(function (response) {
                console.log(response);
                setData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    return (
        <>

            <div className='container mt-5'>
                <div className='row'>
                    {
                        data.map((items) => {
                            return (
                                <div className='col-md-4' key={items.id}>
                                    <div className="card" style={{ width: `18rem` }} >
                                        <div className="card-body">
                                            <img src={`https://prm.scoutsbd.com/prm21/ecommerce-app/${items.image}`} className="card-img-top" alt="jamil" style={{ width: `254px`, height: `177px` }} />
                                            <h5 className="card-title mt-2" style={{ color: `#355197` }}>{items.pro_name}</h5>
                                            <h6 className="card-title">{items.price}</h6>
                                            <p className="card-text">{items.pro_details}</p>
                                            <button href="#" className="card_button"><Link to={"/productdetail"+items.id}><a style={{color:`#fff`,textDecoration:`none`}}>View Details</a></Link></button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default Cardid