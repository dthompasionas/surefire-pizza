import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom';


export const SpecialsContainer = styled.div`
    height: 500px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    position: relative;
    z-index: 1;
`;

export const SectionTitle = styled.h1`
    font-size: 40px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 30px;
`;

export const MenuButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

export const MenuButton = styled(LinkR)`
    border: none;
    width: 30%;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    border-radius: 30px;
    background: #7d0000;
    color: #fff;
    font-weight: bold;
    letter-spacing: 1px;

    &:hover {
        color: #7d0000;
        background: #fff;
        box-shadow: gray 2px 5px 10px;
        transition: 0.3s ease;
        
    }

    @media screen and (max-width: 480px) {
        width: 80%;
    }
`;

export const AddToCart = styled(LinkR)`
    width: 160px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    text-decoration: none;
    color: #252525;
    font-weight: 700;
    letter-spacing: 1px;
    border-radius: 20px;
    box-shadow: 2px 2px 30px rgba(0,0,0,0.2);

    &:hover {
        color: white;
        background-color: #7d0000;
        transition: 0.2s all ease-in-out;
    }

`;



