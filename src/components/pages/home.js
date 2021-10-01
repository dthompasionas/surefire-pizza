import React, {useState} from 'react';
import Sidebar from '../sidebar/index';
import Navbar from '../Navbar/index';
import Hero from '../Hero';
import Specials from '../Specials';
import Info from '../Info/index';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Hero/>
            <Specials/>
            <Info/>
        </>
    )
}

export default Home
