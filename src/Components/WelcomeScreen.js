import React from 'react';
import styled from 'styled-components';
import logo from '../assets/img/logo.png'

export default function WelcomeScreen({isStarted, setIsStarted}) {
    function handleClick() {
        const newIsStarted = !isStarted;
        setIsStarted(newIsStarted)
    }
    return (
        <WelcomeContainer>
            <img src={logo} alt="website logo" />
            <h1>ZapRecall</h1>
            <button onClick={handleClick}>Iniciar Recall!</button>
        </WelcomeContainer>
    )
}

const WelcomeContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #FB6B6B;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        width: 136px;
        height: auto;
        margin-bottom: 20px;
    }
    h1 {
        font-size: 46px;
        color: #ffffff;
        font-family: 'Righteous', cursive;
        margin-bottom: 30px;
    }
    button {
        width: 246px;
        height: 54px;
        font-family: 'Recursive', sans-serif;
        border: 1px solid #D70900;
        color: #D70900;
        background-color: #FFFFFF;
        border-radius: 5px;
        font-size: 18px;
        box-shadow: 0px 14px 26px -9px rgba(0,0,0,0.5);
        cursor: pointer;
    }
`;