import React from "react";
import axios from "axios";
import styled from "styled-components";
import { Button, TextField } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { NativeSelect } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Accordion } from "@material-ui/core";
import { AccordionSummary } from "@material-ui/core";
import { AccordionDetails } from "@material-ui/core";
// import { Card } from "@material-ui/core";
// import { CardContent } from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import { Grid } from "@material-ui/core";

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



const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  background-color: #f5f4fc;
  /* font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; */
`;

const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  -ms-word-break: break-all;
  word-break: break-all;
`;

const ContentSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 0.2rem;
  column-gap: 1rem;
  min-height: 100vh;
`;

const Descricao = styled.p`
  -ms-word-break: break-all;
  word-break: break-all;
`;

export default class Clients extends React.Component {
  state = {
    jobs: [],
    minValue: "",
    maxValue: "",
    query: "",
    ordem: "",
  };

  componentDidMount() {
    this.getAllJobs();
  }

  getAllJobs = () => {
    const url = "https://labeninjas.herokuapp.com/jobs";
    const config = {
      headers: {
        Authorization: "c523c7b3-fa48-4fbe-be79-c362eadb2683",
      },
    };
    axios
      .get(url, config)
      .then((response) => {
        this.setState({
          jobs: response.data.jobs,
        });
        console.log(this.state.jobs);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  onChangeAtualizacaoDaBusca = (event) => {
    this.setState({
      query: event.target.value,
    });
  };
  onChangeAtualizacaoDoMinimo = (event) => {
    this.setState({
      minValue: event.target.value,
    });
  };
  onChangeAtualizacaoDoMaximo = (event) => {
    this.setState({
      maxValue: event.target.value,
    });
  };

  filterJobsByTitle = () => {
    this.setState({
      jobs: this.state.jobs.filter((job) => {
        return job.title.toLowerCase().includes(this.state.query.toLowerCase());
      }),
    });
  };

  onChangeAtualizacaoDaOrdem = (event) => {
    this.setState({
      ordem: event.target.value,
    });
  };

  handleCollpase = () => {
    this.setState({
      collapse: !this.state.collapse,
    });
  };

  render() {
    const cardList = this.state.jobs
      .filter((job) => {
        return job.title.toLowerCase().includes(this.state.query.toLowerCase());
      })
      .filter((job) => {
        return this.state.minValue === "" || job.price >= this.state.minValue;
      })
      .filter((job) => {
        return this.state.maxValue === "" || job.price <= this.state.maxValue;
      })
      .sort((a, b) => {
        switch (this.state.ordem) {
          case "Menor Valor":
            return a.price - b.price;
          case "Maior Valor":
            return b.price - a.price;
          case "Título":
            return a.title.localeCompare(b.title);
          case "Prazo":
            return a.dueDate.localeCompare(b.dueDate);
        }
      })
      .map((job) => {
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
                        onClick={() => this.props.addJobToCart(job)}
                      >
                        Adicionar ao Carrinho
                      </Button>
                    </div>
                  </CardStyle>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <p>Data limite: {job.dueDate.split("T")[0]}</p>
                    <h2>Preço: R$ {job.price}</h2>
                    <p>Métodos de pagamento: {job.paymentMethods}</p>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </JobCards>
          </ContentCards>
        );
      });
    return (
      <div>
        <FilterContainer>
          <TextField
            id="outlined-basic"
            label="Pesquisar serviço"
            variant="outlined"
            placeholder="Busca por titulo"
            value={this.state.query}
            onChange={this.onChangeAtualizacaoDaBusca}
          />

          <TextField
            id="outlined-basic"
            label="Filtrar por Valor Mínimo"
            variant="outlined"
            type="number"
            placeholder="  $"
            value={this.state.minValue}
            onChange={this.onChangeAtualizacaoDoMinimo}
          />

          <TextField
            id="outlined-basic"
            label="Filtrar por Valor Máximo"
            variant="outlined"
            type="number"
            placeholder="  $$$$"
            value={this.state.maxValue}
            onChange={this.onChangeAtualizacaoDoMaximo}
          />

          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Ordenar por:
              </InputLabel>
              <NativeSelect
                defaultValue={""}
                value={this.state.ordem}
                onChange={this.onChangeAtualizacaoDaOrdem}
              >
                <option> Sem Ordenação </option>
                <option> Menor Valor </option>
                <option> Maior Valor </option>
                <option> Título </option>
                <option> Prazo </option>
              </NativeSelect>
            </FormControl>
          </Box>
        </FilterContainer>

        {/* <Title>
          <h1>Lista de Ninjas</h1>
        </Title> */}
        <ContentSection>{cardList}</ContentSection>
      </div>
    );
  }
}
