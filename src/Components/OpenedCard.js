import setaVirar from "../assets/img/seta_virar.png";
import styled from "styled-components";

export default function OpenedCard({question, turnQuestion}) {
  return (
    <OpenedCardContainer>
      <p>{question}</p>
      <img src={setaVirar} alt="seta play" onClick={turnQuestion} />
    </OpenedCardContainer>
  );
}

const OpenedCardContainer = styled.div``;
