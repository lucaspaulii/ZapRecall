import { useState } from "react";
import Card from "./Card";
import OpenedCard from "./OpenedCard";

export default function QuestionCard({
  questionNum,
  question,
  correctAnswer,
  currentClicked,
  setCurrentClicked,
  userAnswers,
  isAnyClicked,
  setIsAnyClicked,
  isFlipped,
  setIsFlipped
}) {
  const [isClicked, setIsClicked] = useState(false);
  

  function displayQuestion() {
    if (isAnyClicked === false) {
      const newIsClicked = !isClicked;
      setIsClicked(newIsClicked);
      setCurrentClicked(questionNum);
      const newIsAnyClicked = !isAnyClicked;
      setIsAnyClicked(newIsAnyClicked);
    }
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
        userAnswers={userAnswers}
      />
    );
  } else {
    return (
      <OpenedCard
        question={question}
        turnQuestion={turnQuestion}
        isFlipped={isFlipped}
        correctAnswer={correctAnswer}
      />
    );
  }
}
