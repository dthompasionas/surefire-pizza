import React, {useState} from 'react';
import video from '../../../../assets/pizza-video.mp4';
import { Button } from '../../../ButtonElement';
import {HeroContainer, HeroBg, VideoBg, HeroBtnWrapper, HeroContent, HeroH1, ArrowForward, ArrowRight} from '../Hero/Hero';


const Hero = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>A SureFire way to have a good time.</HeroH1>
                <HeroBtnWrapper>
                    <Button to='/menu' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>Order Now {hover ? <ArrowForward /> : <ArrowRight />}</Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
