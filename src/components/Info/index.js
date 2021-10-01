import React from 'react';
import '../Info/Info.css';
import BrickOven from '../../assets/brick-oven.jpg'

const Info = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 no-gutters'>
                    <div className='left-side d-flex justify-content-center align-items-center'>
                        <h3>Store Hours:</h3>
                        <div className='store-hours'>
                            <p>Mon-Thurs: 11AM-9PM</p>
                            <p>Fri-Sat: 11AM-10PM</p>
                            <p>Sunday: 12AM-9PM</p>
                        </div>
                        <div className='store-hours-btn'>
                            <button to='/contact' className='contact-btn'>Contact Us</button>
                            <button to='/menu' className='order-btn'>Order Now</button>
                        </div>
                        
                    </div>
                </div>
                <div className='col-md-6 no-gutters'>
                    <div className='right-side d-flex justify-content-center align-items-center'>        
                            <img src={BrickOven} alt='brick oven'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info
