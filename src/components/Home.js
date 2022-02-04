import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import ArtNinja from "../img/labeninjas-art.png"

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentBtn = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;
`;
 
const ContentArt = styled.div`
border-radius: 2rem;
box-shadow:  3px 3px 3px #808080;
`

const Imagem = styled.img`
width: 100%;
border-radius: 2rem;
`
export class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <ContentArt>
          <Imagem src={ArtNinja} alt="Arte ninja"/>
        </ContentArt>
        <ContentBtn>
          <Button
            onClick={this.props.goToService}
            variant="contained"
            color="primary"
          >
            Quero ser um ninja
          </Button>
          <Button
            onClick={this.props.goToClient}
            variant="contained"
            color="primary"
          >
            Contratar um ninja
          </Button>
        </ContentBtn>
      </HomeContainer>
    );
  }
}