import React from 'react';


export default function Products (props) {
    const {product, onAdd} = props;
    return (
        <div className='col-sm-6 col-md-5 col-lg-4 item'>
            <div className='box product-box'>
                <img className='rounded img-fluid pizza-img' alt='pizza pie' src={product.image} />
                <h3 className='name'>{product.name}</h3>
                <p className='description'>
                    {product.details}
                </p>
                <div className='d-flex justify-content-around prod-btn align-items-center'>
                    <button className='btn product-btn btn-success' onClick={() => onAdd(product)} type='button'>Add to cart</button>
                    <span className='badge rounded-pill bg-danger price'>${product.price}</span>
                </div>
            </div>
        </div>
    )
}

// export default Product;
