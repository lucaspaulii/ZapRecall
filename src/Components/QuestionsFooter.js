import React from "react";
import styled from "styled-components";

export default function QuestionsFooter({
  userAnswers,
  setUserAnswers,
  currentClicked,
  deck,
  isAnyClicked,
  setIsAnyClicked,
  isFlipped,
  setIsFlipped
}) {
  let userAnswer = "";
  function handleClick(color) {
    if (color === "green") {
      userAnswer = "#2FBE34";
    }
    if (color === "yellow") {
      userAnswer = "#FF922E";
    }
    if (color === "red") {
      userAnswer = "#FF3030";
    }
    const answerObj = { question: currentClicked, answer: userAnswer };
    setUserAnswers([...userAnswers, answerObj]);
    const newIsAnyClicked = !isAnyClicked;
    setIsAnyClicked(newIsAnyClicked);
    setIsFlipped(false)
  }

  function disableButton() {
    let answeredQuestions = userAnswers.map((a) => a.question);
    if (answeredQuestions.includes(currentClicked) || !currentClicked) {
      return true;
    } else if (!isFlipped) {return true}
     else return false;
  }
  return (
    <Container>
      <OptionsContainer>
        <RedButton
          onClick={() => handleClick("red")}
          disabled={disableButton()}
          data-identifier="forgot-btn"
        >
          Não lembrei
        </RedButton>
        <YellowButton
          onClick={() => handleClick("yellow")}
          disabled={disableButton()}
          data-identifier="almost-forgot-btn"
        >
          Quase lembrei!
        </YellowButton>
        <GreenButton
          onClick={() => handleClick("green")}
          disabled={disableButton()}
          data-identifier="zap-btn"
        >
          Zap!
        </GreenButton>
      </OptionsContainer>
      <p data-identifier="flashcard-counter">
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
