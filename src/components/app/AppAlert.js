import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";



const AppAlert = (props) => {
  const {status, type, message } = props.alertError;


    if(false === status || null === status){
        return null;
    }

    return (
        <Alert className={`alert alert-${type}`}><span>{message}</span></Alert>
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

AppAlert.propTypes = {
  alertError: PropTypes.object.isRequired,
};

export default AppAlert;
