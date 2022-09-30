import styled from 'styled-components'

export default function FlippedCard({correctAnswer}) {
  return (
    <FlippedCardContainer>
      <p>{correctAnswer}</p>
    </FlippedCardContainer>
  );
}

const FlippedCardContainer = styled.div``;
