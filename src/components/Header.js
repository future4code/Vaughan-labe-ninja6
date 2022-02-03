import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const ConteinerHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  background-color: #f5f4fc;
  box-shadow:  3px 3px 3px #808080;
  grid-column: 1/-1;

`;

const ContentBtns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;
  padding: 0 1rem;
`;

const ContentTitle = styled.div`
padding: 0 1rem;
`

const Title = styled.h1`
color: #7c66c5;
font-weight: 800;
&:hover {
    cursor: pointer;
  }
`
export class Header extends React.Component {
  render() {
    return (
      <ConteinerHeader>
        <ContentTitle>
          <Title onClick={this.props.goToHomeTitle}>LabeNinjas</Title>
        </ContentTitle>
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
