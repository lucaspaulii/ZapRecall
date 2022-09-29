import React from "react";
import styled from "styled-components";
import logo from '../assets/img/logo.png';
import QuestionsFooter from './QuestionsFooter'

export default function QuestionsScreen() {
  return (
    <Container>
      <Header>
        <img src={logo} alt='website logo' />
        <h1>ZapRecall</h1>
      </Header>
      <div className="questions">

      </div>
      <QuestionsFooter />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #FB6B6B;
  position: relative;
`;

const Header = styled.div`
display: flex;
justify-content: space-between;
padding: 42px 60px;
align-items: center;

img {
  width: 60px;
  height: auto;
}
h1 {
  font-size: 46px;
  color: #ffffff;
  font-family: 'Righteous', cursive;
}
`
