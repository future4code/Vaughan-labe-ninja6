import React from "react";
import styled from "styled-components";

const ConteinerHeader = styled.div`
width: 100%;
display:flex;
align-items:center;
justify-content: space-between;
border: 1px solid black;
margin: 0;
background-color: grey;

`

export class Header extends React.Component {
  render() {
    return (
      <ConteinerHeader>
    <div>    
    <h1>LabeNinjas</h1>
    </div>
        <div>
          <button onClick={this.props.goToHome}> Home</button>
          <button onClick={this.props.goToCart}>Carrinho</button>
        </div>
      </ConteinerHeader>
    );
  }
}