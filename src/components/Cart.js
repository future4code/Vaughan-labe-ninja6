import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import { Accordion } from "@material-ui/core";
import { AccordionSummary } from "@material-ui/core";
import { AccordionDetails } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { Grid } from "@material-ui/core";

// const JobCartCard = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   width: 70%;
//   border: 1px solid black;
//   border-radius: 1rem;
//   margin: 10px;
//   padding: 2rem;
//   background-color: #f5f5f5;
//   box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
//   cursor: pointer;
//   -ms-word-break: break-all;
//   word-break: break-all;

//   &:hover {
//     background-color: #e5e5e5;
//   }

//   span {
//     color: #7c66c5;
//   }
// `;

// const CardsContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   height: 100%;
// `;

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
        <CardContent
        key={job.id + index}>
          <Accordion>
                    <AccordionSummary expandIcon={<div>V</div>}>
                      <Typography>
                        <h2>{job.title}</h2>
                        <p>{job.description}</p>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <p>Data limite: {job.dueDate.split("T")[0]}</p>
                        <h2>Preço: R$ {job.price}</h2>
                        <p>Métodos de pagamento: {job.paymentMethods}</p>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Button
            variant="main"
            color="primary"
            onClick={() => this.props.removeJobFromCart(index)}
          >
            Remover
          </Button>
        </CardContent>
        
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

        <Card>{cartList}</Card>
      </div>
    );
  }
}
