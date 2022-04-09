import React from 'react';


const ProductCard = (props) => {
    return (
        <>
        <div className="col-md-3 mt-4">
            <div className="card">
                <img src={props.img} className="card-img-top" alt="cards img" />
                <div className="card-body">
                    <h5 className="card-title">{props.Name}</h5>
                    <p className="card-text">${props.price}</p>
                </div>
                {props.states==='Hot'?<div className='hot'>Hot</div>:''}
                {props.states==='New'?<div className='New'>New</div>:''}
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Add to Cart</li>
                </ul>
            </div>
        </div>
    </>
    )
}

export default ProductCard
