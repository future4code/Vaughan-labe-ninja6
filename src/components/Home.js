import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ContentBtn = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;
`;

export class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <h1>LabeNinjas</h1>
        <h3>O talento certo no momento certo</h3>
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
