import React, { Component } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import AppAlert from "./components/app/AppAlert";
import AppHeader from "./components/app/AppHeader";
import Card from "./components/card/Card";
import background from "./assets/images/background.jpg";

class App extends Component {
  state = {
    alertError: {
      status: null,
      type: null,
      message: null,
      component: null,
    },
  };
  

  render() {
    return (
      <>
        <GlobalStyle />
        <AppHeader/>
        <AppAlert alertError={this.state.alertError}/>
        <main id="AppContent">
          <Card setAlert={this.setAlert} />
        </main>
      </>
    );
  }

  setAlert = (type, message, component) => {
    this.setState({alertError: {
      status: true,
      type: type,
      message: message,
      component: component,
    }});
    console.log(this.state);
  }
}

const GlobalStyle = createGlobalStyle`
  * {
    -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
            box-sizing: border-box;
  }
  html, body, #app{
    padding: 0;
    margin: 0;
    min-height:100%;
    height:100%;
  }
  body {
    background:#000;
    background-image: url(${background});
    background-position: center;
    background-size:contain;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #app{
    width:100%;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;


export default App;
