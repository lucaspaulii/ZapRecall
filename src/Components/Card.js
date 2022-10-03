import setaPlay from "../assets/img/seta_play.png";
import iconeErro from "../assets/img/icone_erro.png";
import iconeQuase from "../assets/img/icone_quase.png";
import iconeCerto from "../assets/img/icone_certo.png";
import styled from "styled-components";

export default function Card({ questionNum, displayQuestion, userAnswers }) {
  let color = "#333333";
  let textDecoration = "none";

  function checkColor() {
    userAnswers.forEach((a) => {
      if (a.question === questionNum) {
        color = a.answer;
        textDecoration = "line-through";
      }
    });
  }
  checkColor();

  return (
    <CardContainer
      color={color}
      textDecoration={textDecoration}
      data-identifier="flashcard"
    >
      <p data-identifier="flashcard-index-item">Pergunta {questionNum}</p>
      {color === "#FF3030" ? (
        <img
          src={iconeErro}
          alt="icone erro"
          data-identifier="flashcard-status"
        />
      ) : (
        ""
      )}
      {color === "#FF922E" ? (
        <img
          src={iconeQuase}
          alt="icone quase"
          data-identifier="flashcard-status"
        />
      ) : (
        ""
      )}
      {color === "#2FBE34" ? (
        <img
          src={iconeCerto}
          alt="iconeCerto"
          data-identifier="flashcard-status"
        />
      ) : (
        ""
      )}
      {color === "#333333" ? (
        <img
          src={setaPlay}
          alt="seta play"
          onClick={displayQuestion}
          data-identifier="flashcard-show-btn"
        />
      ) : (
        ""
      )}
    </CardContainer>
  );
}

const CardContainer = styled.div`
  width: 300px;
  height: 35px;
  background-color: #ffffff;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    text-decoration: ${(props) => props.textDecoration};
    line-height: 19px;
    color: ${(props) => props.color};
  }
`;
