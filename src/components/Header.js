import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const ConteinerHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  margin: 0;
  background-color: grey;
`;

const ContentBtns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;
  padding: 0 1rem;
`;
export class Header extends React.Component {
  render() {
    return (
      <ConteinerHeader>
        <div>
          <h1>LabeNinjas</h1>
        </div>
        <ContentBtns>
          <Button
            onClick={this.props.goToHome}
            variant="contained"
            color="primary"
          >
            Home
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={this.props.goToCart}
          >
            Carrinho
          </Button>
        </ContentBtns>
      </ConteinerHeader>
    );
  }
}
