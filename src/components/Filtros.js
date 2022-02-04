import React from "react";
import styled from "styled-components";

const FiltrosContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 32px 24px 0 24px;
`;
export default class Filtros extends React.Component {
  state = {
    //listaDeJobs: [],
    //listaDosFiltros: [],
    busca: "",
    valorMinimo: "",
    valorMaximo: "",
    ordem: "",
  };
  /*componentDidMount() {
        this.getJobs()
        this.filtros()
    }
    */
  onChangeAtualizacaoDaBusca = (event) => {
    this.setState({
      busca: event.target.value,
    });
  };
  onChangeAtualizacaoDoMinimo = (event) => {
    this.setState({
      valorMinimo: event.target.value,
    });
  };
  onChangeAtualizacaoDoMaximo = (event) => {
    this.setState({
      valorMaximo: event.target.value,
    });
  };
  onChangeAtualizacaoDaOrdem = (event) => {
    this.setState({
      ordem: event.target.value,
    });
  };
  /*getJobs = () => {
        axios
        .get(`${BASE_URL}/jobs`, headers)
        .then((res) => {
            this.setState({ listaDeJobs: res.data.jobs, listaDosFiltros: res.data.jobs })
        })
        .catch((error) => {
            alert(error.response.data.message)
        })
    }
    */
  filtros = () => {
    this.props.job = this.props.job
      .filter((job) => {
        return job.titulo
          .toLowerCase()
          .includes(this.state.busca.toLowerCase());
      })
      .filter((job) => {
        return (
          this.state.valorMinimo === "" || job.valor >= this.state.valorMinimo
        );
      })
      .filter((job) => {
        return (
          this.state.valorMaximo === "" || job.valor <= this.state.valorMaximo
        );
      })
      .sort((a, b) => {
        switch (this.state.ordem) {
          case "Menor Valor":
            return a.price - b.price;
          case "Maior Valor":
            return b.price - a.price;
          case "Título":
            return a.titulo.localeCompare(b.titulo);
          case "Prazo":
            return a.dueDate.localeCompare(b.dueDate);
        }
      });
    //this.setState({listaDosFiltros: filtros})
    console.log(this.props.job.length);
  };
  render() {
    return (
      <div>
        <FiltrosContainer>
          <h3>Busca por nome</h3>
          <input
            placeholder="Busca por titulo"
            value={this.props.busca}
            onChange={this.props.onChangeAtualizacaoDaBusca}
          />
          <h3>Valor mínimo</h3>
          <input
            type="number"
            placeholder="  $"
            value={this.props.valorMinimo}
            onChange={this.props.onChangeAtualizacaoDoMinimo}
          />
          <h3>Valor máximo</h3>
          <input
            type="number"
            placeholder="  $$$$"
            value={this.props.valorMaximo}
            onChange={this.props.onChangeAtualizacaoDoMaximo}
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
        </FiltrosContainer>
      </div>
    );
  }
}