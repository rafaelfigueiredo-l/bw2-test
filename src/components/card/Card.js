import React, { Component } from "react";
import styled from "styled-components";
import Api from "../../service/SwapiApiService";
import CardButton from "./CardButton";
import Loader from "./CardLoader";

class Card extends React.Component {
  state = {
    planetId: null,
    cardData: null
  };

  componentDidMount() {
    this.getRandomPlanet();
  }

  render() {
    
    if (this.state.cardData === null) {
      return (
        <CardLayout id="Card">
          <CardBox>
            <Loader />
          </CardBox>
        </CardLayout>
      );
    }

    const {cardData} = this.state;
    const { name } = cardData;
    return (
      <CardLayout id="Card">
        <CardBox>
          <CardData>
            <CardName>
              <h2>{name.toUpperCase()}</h2>
            </CardName>            
              <ListData>
                {this.printCardData(cardData)}
              </ListData>            
          </CardData>
          <CardButton getRandomPlanet={this.getRandomPlanet} />
        </CardBox>
      </CardLayout>
    );
  }

  getRandomPlanet = async id => {
    this.setState({ planetId: null, cardData: null });
    const data = await Api.getRandomPlanet();
    const { name, population, climate, terrain, films } = data;
    this.setState({
      planetId: id,
      cardData: {
        name,
        population,
        climate,
        terrain,
        films
      }
    });
  };

  printCardData = (data) =>{
    const arrayData = Object.entries(data);

    const list = arrayData.map((el,i) => {


      const key = arrayData[i][0].toString().toUpperCase();

      if('NAME' === key){
        return;
      }

      if('FILMS' === key){
      const value = arrayData[i][1].length;
      const modifiedKey = `Featured In: `.toUpperCase();
      let modifiedValue = `${value} Films`.toUpperCase();

      if(0 === value){
        modifiedValue = `${value} Film`.toUpperCase();
      }

      
        return (
          <li className="list-item film-item" key={i}>
            <span>{modifiedKey}:</span> {modifiedValue}
          </li>
        );
      }

      const normalValue = arrayData[i][1].toString().toUpperCase();

      return (
        <li className="list-item" key={i}>
          <span>{key}:</span> {normalValue}
        </li>
      );
    });

    return list;

  }
}

const CardLayout = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height:100%;
  min-height:100%;
  `;

  const CardBox = styled.div`
  width:300px;
`;

const CardName = styled.div`
  padding: 10px 20px;
  border-bottom:2px solid #000;
`;
const CardData = styled.div`
  background: #fff;
  border: 10px solid yellow;
  width:100%;
  box-shadow: 0px 50px 111px 68px #000;
`;

const ListData = styled.ul`
  padding: 10px 20px;
  list-style: none;
  span {
    font-weight: bold;
  }
  .film-item {
    text-align: center;
    font-size: 0.9em;
    text-align: center;
    padding-top: 30px;
  }
`;
export default Card;

