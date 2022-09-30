import React from "react";
import styled from "styled-components";
import deck from "./Deck";

export default function QuestionsFooter({
  userAnswers,
  setUserAnswers,
  currentClicked,
  deck,
  isAnyClicked,
  setIsAnyClicked,
}) {
  let userAnswer = "";
  function handleClick(color) {
    if (color === "green") {
      userAnswer = "green";
    }
    if (color === "yellow") {
      userAnswer = "yellow";
    }
    if (color === "red") {
      userAnswer = "red";
    }
    const answerObj = { question: currentClicked, answer: userAnswer };
    console.log([...userAnswers, answerObj]);
    setUserAnswers([...userAnswers, answerObj]);
    const newIsAnyClicked = !isAnyClicked;
    setIsAnyClicked(newIsAnyClicked);
  }

  function disableButton() {
    let answeredQuestions = userAnswers.map((a) => a.question);
    if (answeredQuestions.includes(currentClicked) || !currentClicked) {
      return true;
    } else return false;
  }
  return (
    <Container>
      <OptionsContainer>
        <RedButton
          onClick={() => handleClick("red")}
          disabled={disableButton()}
        >
          Não lembrei
        </RedButton>
        <YellowButton
          onClick={() => handleClick("yellow")}
          disabled={disableButton()}
        >
          Quase não lembrei!
        </YellowButton>
        <GreenButton
          onClick={() => handleClick("green")}
          disabled={disableButton()}
        >
          Zap!
        </GreenButton>
      </OptionsContainer>
      <p>
        {userAnswers.length}/{deck.length} CONCLUIDOS
      </p>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 111px;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #ffffff;
  font-family: "Recursive", sans-serif;
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
  background-color: #ff3030;
`;

const YellowButton = styled.button`
  background-color: #ff922e;
`;

const GreenButton = styled.button`
  background-color: #2fbe34;
`;
