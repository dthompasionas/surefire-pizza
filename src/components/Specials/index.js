import React from 'react';
import { SectionTitle, MenuButton, MenuButtonContainer } from './Specials';
import '../Specials/specials.css';
import ImageSlider from '../Specials/Slider';


const Specials = () => {
    return (
        <div className='container mt-5 carousel'>
            <SectionTitle>Specials</SectionTitle>
            <ImageSlider/>
            <MenuButtonContainer>
                <MenuButton to='/menu'>View Menu</MenuButton>
            </MenuButtonContainer>
            
            
        </div>
    )
}

export default Specials
