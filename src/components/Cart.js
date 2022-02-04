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
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const ContentCards = styled.div`
  width: 100%;
  justify-items: center;
`;

const JobCards = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 0.2rem;
  -ms-word-break: break-all;
  word-break: break-all;
`;

const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  -ms-word-break: break-all;
  word-break: break-all;
`;

const ContentSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 0.2rem;
  column-gap: 1rem;
  min-height: 100vh;
  
`;

const Descricao = styled.p`
  -ms-word-break: break-all;
  word-break: break-all;
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
        <ContentCards>
            <JobCards>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <CardStyle>
                    <div>
                      <Typography>
                        <h2>{job.title}</h2>
                        <Descricao>{job.description}</Descricao>
                      </Typography>
                    </div>
                    <div>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => this.props.removeJobFromCart(index)}
                      >
                        Remover
                      </Button>
                    </div>
                  </CardStyle>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <p>Data limite: {job.dueDate.split("T")[0]}</p>
                    <h2>Preço: R$ {job.price}</h2>
                    <p>Métodos de pagamento: {job.paymentMethods.join(" ")}</p>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </JobCards>
          </ContentCards>
        
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

        <ContentSection>{cartList}</ContentSection>
      </div>
    );
  }
}