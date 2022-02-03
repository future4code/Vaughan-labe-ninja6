import React from "react";
import axios from "axios";
import styled from "styled-components";
import { Button, TextField } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { NativeSelect } from "@material-ui/core";
// import { Button } from "@material-ui/core";

const ContentCards = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
row-gap: 3rem;
width: 100%;
justify-items: center;0
`;

const JobCards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  border-radius: 1rem;
  margin: 10px;
  padding: 2rem;
  box-shadow: 3px 3px 3px #808080;
  -ms-word-break: break-all;
  word-break: break-all;

  &:hover {
    background-color: #e5e5e5;
  }

  span {
    color: #7c66c5;
  }
`;

const Title = styled.h2`
  color: #7c66c5;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 1rem;
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
        // console.log(response.data);
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

  render() {
    return (
      <div>
        <FilterContainer>
          <TextField
            id="outlined-basic"
            label="Filtrar por Titilo"
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

        <Title>
          <h1>Lista de Jobs</h1>
        </Title>

        <ContentCards>
          {this.state.jobs
            .filter((job) => {
              return job.title
                .toLowerCase()
                .includes(this.state.query.toLowerCase());
            })
            .filter((job) => {
              return (
                this.state.minValue === "" || job.price >= this.state.minValue
              );
            })
            .filter((job) => {
              return (
                this.state.maxValue === "" || job.price <= this.state.maxValue
              );
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
                <JobCards>
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
                    {job.dueDate.split("T")[0]}
                  </p>
                  <Button
                    variant="outlined"
                    onClick={() => this.props.addJobToCart(job)}
                  >
                    Adicionar ao Carrinho
                  </Button>
                </JobCards>
              );
            })}
        </ContentCards>
      </div>
    );
  }
}
