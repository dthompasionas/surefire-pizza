import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const OrderButtonLocation = styled(LinkR)`
    border: none;
    background: #7d0000;
    color: #fff;
    width: 150px;
    height: 40px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;

    &:hover {
        background: #881f1f;
        color: #fff;
        transition: 0.3s ease;
        
    }
`;


export const ContactButtonLocation = styled(LinkR)`
    border: none;
    background: #7d0000;
    color: #fff;
    width: 150px;
    height: 40px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    margin-top: 10px;

    &:hover {
        background: #881f1f;
        color: #fff;
        transition: 0.3s ease;
        
    }
`;