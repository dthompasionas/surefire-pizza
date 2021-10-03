import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLocationArrow, FaPhone, FaEnvelope } from 'react-icons/fa';


import './Footer.css';

const Footer = () => {

    return (
        <footer className='page-footer bg-dark'>
            <div className='socials'>
                <div className='container'>
                    <div className='row py-4 d-flex align-items-center'>
                        <div className='col-md-12 social text-center'>
                            <a className='fb' href='#'><FaFacebookF className='text-white mr-4'/></a>
                            <a className='twitter' href='#'><FaTwitter className='text-white mr-4'/></a>
                            <a className='insta' href='#'><FaInstagram className='text-white mr-4'/></a>
                            
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className='container text-white text-center text-md-left mt-5'>
                <div className='row'>
                    <div className='col-md-3 mx-auto mb-4'>
                        <h6 className='text-uppercase font-weight-bold'>Who are we?</h6>
                        <hr className='underline mb-4 mt-0 d-inline-block mx-auto '/>
                        <p className='mt-2'>Lorem ipsum</p>
                    </div>

                    <div className='col-md-3 mx-auto mb-4'>
                        <h6 className='text-uppercase font-weight-bold'>Useful Links</h6>
                        <hr className='underline mb-4 mt-0 d-inline-block mx-auto '/>
                        <ul className='list-unstyled'>
                            <li className='my-2'><a href='/'>Home</a></li>
                            <li className='my-2'><a href='/menu'>Menu</a></li>
                            <li className='my-2'><a href='/location'>Location</a></li>
                            <li className='my-2'><a href='/about'>About</a></li>
                            <li className='my-2'><a href='/contact'>Contact</a></li>
                        </ul>
                    </div>

                    <div className='col-md-3 mx-auto mb-4'>
                        <h6 className='text-uppercase font-weight-bold'>Location</h6>
                        <hr className='underline mb-4 mt-0 d-inline-block mx-auto '/>
                        <p><FaLocationArrow/> 7329 Howard Avenue
                        Fort Dodge, IA 50501</p>
                    
                    </div>

                    <div className='col-md-3 mx-auto mb-4'>
                        <h6 className='text-uppercase font-weight-bold'>Contact</h6>
                        <hr className='underline mb-4 mt-0 d-inline-block mx-auto '/>
                        <ul className='contact-list list-unstyled'>
                            <li className='my-2'><FaPhone/> 983-456-8495</li>
                            <li className='my-2'><FaEnvelope/> Surefire@gmail.com</li>
                            <li className='my-2'></li>
                            <li className='my-2'></li>
                            <li className='my-2'></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            
        </footer>
    )
}

export default Footer
