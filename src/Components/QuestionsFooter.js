import React from "react";
import styled from "styled-components";

export default function QuestionsFooter() {
    return (
        <Container>
            <OptionsContainer>
                <RedButton>Não lembrei</RedButton>
                <YellowButton>Quase não lembrei!</YellowButton>
                <GreenButton>Zap!</GreenButton>
            </OptionsContainer>
            <p>{`0`}/4 CONCLUIDOS</p>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 111px;;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #ffffff;
    font-family: 'Recursive', sans-serif;
    font-weight: 400;

    p {
        text-align: center;
        font-size: 18px;
        color: #333333;
        margin-top: 10px;
    }
`;

const OptionsContainer = styled.div`
    margin: 20px 54px;
    display: flex;
    justify-content: space-between;

    button {
        width: 85px;
        height: 37px;
        border-radius: 5px;
        border: none;
        color: #ffffff;
        font-size: 13px;
        font-weight: 500;
    }
`;

const RedButton = styled.button`
    background-color: #FF3030;
`;

const YellowButton = styled.button`
    background-color: #FF922E;
`;

const GreenButton = styled.button`
    background-color: #2FBE34;
`;