import React, { Component } from "react";
import styled from "styled-components";
import Logo from "../../assets/images/logo.png";


const AppHeader = (props) => {

  return (
    <>
      <Header><a href="#"><img src={Logo}/></a></Header>
    </>
  );
};

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding:20px 0;
    a{
        text-align:center;
        width:100%;
    }
    img{
        max-width:200px;
        width:100%;
    }
`;

export default AppHeader;
