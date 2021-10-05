import React from 'react';
import Dough from '../../../assets/about-dough.jpg';
import Brick from '../../../assets/about-brick.jpg';
import Ranch from '../../../assets/about-ranch.jpg';
import Family from '../../../assets/about-family.jpg';
import './about.css';


const about = () => {
    return (
        <div className='about-sec'>
            <div className='container-fluid about-hero-cont'>
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner about-inner">
                        <div className="carousel-item active">
                            <img src={Dough} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={Brick} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={Ranch} className="d-block w-100" alt="..."/>
                        </div>
                    </div>
                </div>
            {/* <div className='row'>
                <div className='col-12'>
                    Hello
                </div>
            </div> */}
            </div>

            <div className='container about-us'>
                <div className='row justify-content-center'>
                    <div className='col-sm-12 col-md-5 portrait-cont'>
                        <img className='family-portrait' src={Family} alt='Family portrait' width='100%'/>
                    </div>
                    <div className='col-sm-12 col-md-7 about-us-cont'>
                        <h2>About Us</h2>
                        <p>Lorem ipsum how are you?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default about
