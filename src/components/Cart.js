import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const JobCartCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  border: 1px solid black;
  border-radius: 1rem;
  margin: 10px;
  padding: 2rem;
  background-color: #f5f5f5;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  cursor: pointer;
  -ms-word-break: break-all;
  word-break: break-all;

  &:hover {
    background-color: #e5e5e5;
  }

  span {
    color: #7c66c5;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Title = styled.h2`
  color: #7c66c5;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 1rem;
`;

export class Cart extends React.Component {
  render() {
    console.log("this.props.jobsOnCart", this.props.jobsOnCart);
    const cartList = this.props.jobsOnCart.map((job, index) => {
      return (
        <JobCartCard key={job.id + index}>
          <h1>{job.title}</h1>
          <p>
            <span>Descrição: </span>
            {job.description}
          </p>
          <p>
            <span>Valor: </span>R$ {job.price}
          </p>
          <p>
            <span>Data limite: </span>
            {job.dueDate}
          </p>
          <Button
            variant="main"
            color="primary"
            onClick={() => this.props.removeJobFromCart(index)}
          >
            Remover
          </Button>
        </JobCartCard>
      );
    });

    return (
      <div>
        <Title>
          <h2>Carrinho</h2>
          <Button
            variant="contained"
            color="primary"
            onClick={this.props.goToClient}
          >
            Voltar aos serviços
          </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={this.props.cartCheckout}
        >
          Contratar serviços do carrinho
        </Button>
        </Title>
        
        

        <CardsContainer>{cartList}</CardsContainer>
      </div>
    );
  }
}
