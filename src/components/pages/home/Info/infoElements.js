import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const HoursOrderButton = styled(LinkR)`
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
        background: #fff;
        color: #7d0000;
        transition: 0.3s ease;
    }
`;


export const HoursContactButton = styled(LinkR)`
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
        background: #fff;
        color: #7d0000;
        transition: 0.3s ease;
    }
`;