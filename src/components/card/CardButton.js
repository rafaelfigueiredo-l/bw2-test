import React from "react";
import styled from "styled-components";

const CardButton = (props) => {

  return (
    <>
      <Wrapper><Button onClick={() => props.getRandomPlanet()}>NEXT</Button></Wrapper>
    </>
  );
};

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #FFE919;
  color: #FFE919;
  margin-top: 20px;
  padding: 20px;
  cursor: pointer;
  font-size: 22px;
  text-align: center;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default CardButton;
