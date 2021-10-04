import React from 'react';
// import nymenu from '../../../assets/ny-menu.png';
import './Item.css';

const Item = ({ name, desc, img, price}) => {
    return (
        <div className='col-sm-6 col-md-5 col-lg-4 item'>
            <div className='box product-box'>
                <img className='rounded img-fluid pizza-img' alt='pizza pie' src={img} />
                <h3 className='name'>{name}</h3>
                <p className='description'>
                    {desc}
                </p>
                <div className='d-flex justify-content-around prod-btn align-items-center'>
                    <button className='btn product-btn btn-success' type='button'>Add to cart</button>
                    <span className='badge rounded-pill bg-danger price'>${price}</span>
                </div>
            </div>
        </div>
    )
}

export default Item
