import styled from "styled-components";
import { useState } from "react";
import Card from "./Card";
import OpenedCard from "./OpenedCard";
import FlippedCard from "./FlippedCard";

export default function QuestionCard({
  questionNum,
  question,
  correctAnswer,
  currentClicked,
  setCurrentClicked,
  userAnswers,
}) {
  const [isClicked, setIsClicked] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  function displayQuestion() {
    const newIsClicked = !isClicked;
    setIsClicked(newIsClicked);
    setCurrentClicked(questionNum);
  }
  function turnQuestion() {
    const newIsFlipped = !isFlipped;
    setIsFlipped(newIsFlipped);
  }
  let answeredQuestions = userAnswers.map((a) => a.question);

  if (!isClicked || answeredQuestions.includes(questionNum)) {
    return (
      <Card
        questionNum={questionNum}
        displayQuestion={displayQuestion}
        currentClicked={currentClicked}
      />
    );
  } else {
    if (!isFlipped) {
      return (
        <OpenedCard
          question={question}
          turnQuestion={turnQuestion}
          currentClicked={currentClicked}
          questionNum={questionNum}
        />
      );
    } else {
      return <FlippedCard correctAnswer={correctAnswer} />;
    }
  }
}
