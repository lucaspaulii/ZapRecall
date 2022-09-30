import setaPlay from "../assets/img/seta_play.png";
import styled from "styled-components";

export default function Card({questionNum, displayQuestion}) {
    return (
        <CardContainer>
        <p>Pergunta {questionNum}</p>
        <img src={setaPlay} alt="seta play" onClick={displayQuestion} />
      </CardContainer>
    )
}

const CardContainer = styled.div`
background-color: red;
`;