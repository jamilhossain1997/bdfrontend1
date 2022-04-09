import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const Allproview = () => {
    const [sildeData, setSildeData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get('https://prm.scoutsbd.com/prm21/ecommerce-app/api/UserProduct')
            .then(function (response) {
                console.log(response);
                setSildeData(response.data.Products);
                setLoading(false);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])
    if (loading) {
        return (
            <h3>Loading...</h3>
        )
    } else {
        return (

            <>
                
                <div className='container-fluid mt-5'>
                    <div className='row'>
                        {
                            sildeData.map((items) => {
                                return (
                                    <div className='col-md-3 mb-5' key={items.id}>
                                        <div className="card" style={{ width: `18rem` }} >
                                            <div className="card-body">
                                                <img src={`https://prm.scoutsbd.com/prm21/ecommerce-app/${items.image}`} className="card-img-top" alt="jamil" style={{ width: `254px`, height: `177px` }} />
                                                <h5 className="card-title mt-2" style={{ color: `#355197` }}>{items.pro_name}</h5>
                                                <h6 className="card-title">{items.price}</h6>
                                                <p className="card-text">{items.pro_details}</p>
                                                <button href="#" className="card_button">View Details</button>
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
}

export default Allproview