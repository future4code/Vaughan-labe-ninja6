import React from "react";
import axios from "axios";
import styled from "styled-components";
import {Cart} from "./Cart";
// import JobDetails from "./JobDetails";

const JobCards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  border: 1px solid black;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  background-color: #f5f5f5;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  cursor: pointer;

  &:hover {
    background-color: #e5e5e5;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  height: 100%;
  border: 1px solid black;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  background-color: #f5f5f5;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
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
          <h3>Busca por nome</h3>
          <input
            placeholder="Busca por titulo"
            value={this.state.query}
            onChange={this.onChangeAtualizacaoDaBusca}
          />

          <h3>Valor mínimo</h3>
          <input
            type="number"
            placeholder="  $"
            value={this.state.minValue}
            onChange={this.onChangeAtualizacaoDoMinimo}
          />

          <h3>Valor máximo</h3>
          <input
            type="number"
            placeholder="  $$$$"
            value={this.state.maxValue}
            onChange={this.onChangeAtualizacaoDoMaximo}
          />

          <select
            value={this.state.ordem}
            onChange={this.onChangeAtualizacaoDaOrdem}
          >
            <option>Sem Ordenação</option>
            <option>Menor Valor</option>
            <option>Maior Valor</option>
            <option>Título</option>
            <option>Prazo</option>
          </select>
        </FilterContainer>

        <h1>Lista de Jobs</h1>
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
                <p>{job.description}</p>
                <p>{job.price}</p>
                <p>{job.dueDate}</p>
                <button onClick={() => this.props.addJobToCart(job)}>
                  Adicionar ao Carrinho
                </button>
                
              </JobCards>
            );
          })}

        <button onClick={this.getAllJobs}>Atualizar</button>
      </div>
    );
  }
}
