import React from "react";
import styled from "styled-components";


const MeuLogo = styled.div`
height: 100px;
display:flex;
align-items:center

` 

const MeuBotao = styled.div`
width: 100px;
display:flex;
justify-content: space-around;

`

export class Header extends React.Component  {


    render() {
      return (
        <MeuLogo>
          <h1>LabeNinjas</h1>
          <MeuBotao>
          <button onClick={this.props.goToHome} > Home</button>
          <button onClick={this.props.goToCart}>Carrinho</button>
          </MeuBotao>
        </MeuLogo>
      );
    }
  }

  
  