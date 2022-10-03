import React from "react";
import styled from "styled-components";
import logo from "../assets/img/logo.png";
import QuestionsFooter from "./QuestionsFooter";
import QuestionCard from "./QuestionCard";
import { useState } from "react";

export default function QuestionsScreen({ deck }) {
  const [userAnswers, setUserAnswers] = useState([]);
  const [currentClicked, setCurrentClicked] = useState();
  const [isAnyClicked, setIsAnyClicked] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <Container>
      <Header>
        <img src={logo} alt="website logo" />
        <h1>ZapRecall</h1>
      </Header>
      {deck.map((a) => {
        return (
        <QuestionCard
          questionNum={a.questionNum}
          question={a.question}
          correctAnswer={a.correctAnswer}
          currentClicked={currentClicked}
          setCurrentClicked={setCurrentClicked}
          userAnswers = {userAnswers}
          isAnyClicked = {isAnyClicked}
          setIsAnyClicked = {setIsAnyClicked}
          isFlipped = {isFlipped}
          setIsFlipped = {setIsFlipped}
        />);
      })}
      <QuestionsFooter
        userAnswers={userAnswers}
        setUserAnswers={setUserAnswers}
        currentClicked={currentClicked}
        deck={deck}
        isAnyClicked = {isAnyClicked}
        setIsAnyClicked = {setIsAnyClicked}
        isFlipped = {isFlipped}
        setIsFlipped = {setIsFlipped}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fb6b6b;
  position: relative;
  margin-bottom: 111px;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
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
    font-family: "Righteous", cursive;
    margin-left: 20px;
  }
`;
