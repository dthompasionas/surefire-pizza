import React from 'react';
import '../Info/Info.css';
import BrickOven from '../../assets/brick-oven.jpg'
import PizzaCooking from '../../assets/pizza-cooking.jpg'
import Restaraunt from '../../assets/restaraunt.jpg'
import Tortellini from '../../assets/tortellini.jpg'

const Info = () => {

    var myCarousel = document.querySelector('#myCarousel')
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 no-gutters'>
                    <div className='left-side d-flex justify-content-center align-items-center'>
                        <div className='card store-info'>
                            <div className='card-info'>
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
                        
                    </div>
                </div>
                <div className='col-md-6 no-gutters info-slider'>
                    {/* <div className='right-side d-flex justify-content-center align-items-center'>        
                            <img src={BrickOven} alt='brick oven'/>
                    </div> */}
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src={BrickOven} className="d-block w-100" alt="Brick oven"/>
                            </div>
                            <div className="carousel-item">
                            <img src={PizzaCooking} className="d-block w-100" alt="Pizza in oven"/>
                            </div>
                            <div className="carousel-item">
                            <img src={Restaraunt} className="d-block w-100" alt=""/>
                            </div>
                            <div className="carousel-item">
                            <img src={Tortellini} className="d-block w-100" alt=""/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info
