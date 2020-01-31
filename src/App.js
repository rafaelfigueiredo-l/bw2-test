import React, { Component } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Card from "./components/card/Card";
import background from "./assets/images/background.jpg";

class App extends Component {
  state = {
    planetId: null,
    planetData: null,
  };

  render() {
    const { planetData, loading, countPlanets } = this.state;

    return (
      <>
        <GlobalStyle />
        <Main id="AppContent">
          <Card />
        </Main>
      </>
    );
  }
}

const GlobalStyle = createGlobalStyle`
  html, body, #app{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    min-height:100%;
    height:100%;
  }
  body {
    background:#000;
    background-image: url(${background});
    background-position: center;
    background-size:contain;
  }
  #app{
    
  }
`;

const Main = styled.main`
  height: 100%;
  width: 100%;
  min-height: 100%;
`;

const LayoutApp = styled.div`
  background:black;
  height:100%;
  width:100%;
  min-height:100%;
`;


export default App;
