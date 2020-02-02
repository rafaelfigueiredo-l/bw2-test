import React from "react";
import styled from "styled-components";


const AppAlert = (props) => {

    console.log(props);

    if(false === props.alertError.status || null === props.alertError.status){
        return null;
    }

    return (
        <>
        <Alert className={`alert alert-${props.alertError.type}`}><span>{props.alertError.message}</span></Alert>
        </>
    );
};

const Alert = styled.div`
  background:#ccc;
  padding:3px 20px;
  border-radius:20px;

  &.alert-error{
      background:red;
  }
  &.alert-message{
    background:#616be2;
  }
  &.alert-success{
    background:#63e261;
  }

`;

export default AppAlert;
