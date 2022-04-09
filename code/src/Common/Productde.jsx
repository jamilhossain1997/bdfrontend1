import { useState,useEffect } from 'react';
import axios from 'axios';


const Productde = (props) => {
    const [sildeData, setSildeData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    
    useEffect(() => {
        axios.get(`https://prm.scoutsbd.com/prm21/ecommerce-app/api/onedataview/${props.match.params.id}`)
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
    }
    else {
        return (
            <>
               
                   
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-8 offset-md-2 proDelatis mb-3'>
                                <div className="card mt-4">
                                    <h5 className="card-header">Product Details</h5>
                                    <img src={`https://prm.scoutsbd.com/prm21/ecommerce-app/${sildeData.image}`} className="card-img-top"  style={{ width: `100%`, height: `400px` }}  alt="jamil"/>
                                    <div className="card-body">

                                        <h5 className="card-title mt-2" style={{ color: `#355197` }}>{sildeData.pro_name}</h5>
                                        <h6 className="card-title">{sildeData.price}</h6>
                                        <p className="card-text">{sildeData.pro_details}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
            </>
        )
    }
}

export default Productde