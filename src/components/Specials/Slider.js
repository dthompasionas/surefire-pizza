import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ClassicNy from '../../assets/classic-ny.jpg';
import ClassicSpaghetti from '../../assets/classic-spaghetti.jpg';
import basil from '../../assets/basil-pizza.jpg';
import Nachos from '../../assets/nachos.jpg';
import {CardWrapper, Card, CardImage, Image, SocialIcons, Details, Title } from '../Specials/SliderElements';

function ImageSlider() {
    let settings = {
        dot: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: 'linear',
    }
    return (
        <Slider {...settings}>
            <div className='card-wrapper'>
                <div className='card'>
                    <div className='card-image'>
                        <img src={ClassicNy}/>
                    </div>
                    <ul className='social-icons'>
                        <li>Pizza</li>
                    </ul>
                    <div className='details'>
                        <h2>New York Slice</h2>
                        <p>Fresh tortilla chips topped with lean seasoned
                         ground beef, Cheese, Sour cream and Pico.</p>
                    </div>
                </div>
            </div>
            <div className='card-wrapper'>
                <div className='card'>
                    <div className='card-image'>
                        <img src={ClassicSpaghetti}/>
                    </div>
                    <ul className='social-icons'>
                        <li>Pizza</li>
                    </ul>
                    <div className='details'>
                        <h2>Classic Spaghetti</h2>
                        <p>Fresh tortilla chips topped with lean seasoned
                         ground beef, Cheese, Sour cream and Pico.</p>
                    </div>
                </div>
            </div>
            <div className='card-wrapper'>
                <div className='card'>
                    <div className='card-image'>
                        <img src={Nachos}/>
                    </div>
                    <ul className='social-icons'>
                        <li>Pizza</li>
                    </ul>
                    <div className='details'>
                        <h2>Loaded Nachos</h2>
                        <p>Fresh tortilla chips topped with lean seasoned
                         ground beef, Cheese, Sour cream and Pico.</p>
                    </div>
                </div>
            </div>
            <div className='card-wrapper'>
                <div className='card'>
                    <div className='card-image'>
                        <img src={basil}/>
                    </div>
                    <ul className='social-icons'>
                        <li>
                            <a to='#'>Add To Cart</a>
                        </li>
                    </ul>
                    <div className='details'>
                        <h2>Chicken Basil Pizza</h2>
                        <p className='job-title'>Fresh tortilla chips topped with lean seasoned
                         ground beef, Cheese, Sour cream and Pico.</p>
                    </div>
                </div>
            </div>
            {/* <CardWrapper>
                <Card>
                    <CardImage>
                        <Image src={ClassicNy}/>
                    </CardImage>
                    <SocialIcons>
                        
                    </SocialIcons>
                    <Details>
                        <Title>New York Slice</Title>
                    </Details>
                </Card>
            </CardWrapper>
            <CardWrapper>
                <Card>
                    <CardImage>
                        <Image src={ClassicSpaghetti}/>
                    </CardImage>
                    <SocialIcons>
                        
                    </SocialIcons>
                    <Details>
                        <Title>Spaghetti</Title>
                    </Details>
                </Card>
            </CardWrapper> */}
            

        </Slider>
    )
}

export default ImageSlider
