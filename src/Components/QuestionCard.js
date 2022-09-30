import styled from "styled-components";
import { useState } from "react";
import Card from './Card';
import OpenedCard from './OpenedCard';
import FlippedCard from "./FlippedCard";

export default function QuestionCard({
  questionNum,
  question,
  correctAnswer,
  setCurrentClicked,
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
    setIsFlipped(newIsFlipped)
  }


  if (!isClicked) {
    return (
      <Card questionNum={questionNum} displayQuestion={displayQuestion} />
    );
  } else {
    if (!isFlipped) {
      return (
        <OpenedCard question={question} turnQuestion={turnQuestion} />
      );
    } else {
        return (
            <FlippedCard correctAnswer={correctAnswer}/>
        )
    }
  }
}


