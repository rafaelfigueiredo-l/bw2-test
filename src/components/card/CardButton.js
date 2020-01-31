import React, { Component } from "react";
import styled from "styled-components";
import { HelperGetRandomInt } from "../../helper/RandomNumber";

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
  border: 2px solid yellow;
  color: yellow;
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
