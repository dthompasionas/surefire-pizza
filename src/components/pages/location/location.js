import React from 'react';
import { OrderButtonLocation, ContactButtonLocation } from './locationElements';
import Map from '../../Map';
import './location.css';

const location = () => {
    return (
        <>
            <div className='container location-sec'>     
                <div className='col-12 '>

                    <div className="intro">
                        <h2>Locations</h2>
                    </div>

                    <div className='card location-card d-flex justify-content-center'>
                        <div className='row card-info-location'>
                            <div className='col-sm-12 col-md-4 card-map'>
                                <Map/>
                            </div>

                            <div className='col-sm-12 col-md-4 card-left'>
                                <h2>7329 Howard Ave.</h2>
                                <div className='address'>
                                    <span className='locality'>Fort Dodge,</span>
                                    <span className='state'>IA,</span>
                                    <span className='postal-code'>50501</span>
                                </div>
                                <div className='options'>
                                    <h3>Options</h3>
                                    <ul className='option-list'>
                                        <li className='delivery-opt'>Delivery</li>
                                        <li className='carry-opt'>Carry-out</li>
                                        <li className='curb-opt'>Curbside</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-sm-12 col-md-4 card-right'>
                                <div className='location-hours'>
                                    <h3>Store Hours</h3>
                                    <ul>
                                        <li>Mon-Thurs: 11am-9pm</li>
                                        <li>Fri-Sat: 11am-10pm</li>
                                        <li>Sun: 12am-9pm</li>
                                    </ul>
                                </div>
                                <div className='order-button-cont'>
                                    <OrderButtonLocation to='/menu'>Order Now</OrderButtonLocation>
                                    <ContactButtonLocation to='/contact'>Contact Us</ContactButtonLocation>
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
                 
            </div>
        </>
    )
}

export default location
