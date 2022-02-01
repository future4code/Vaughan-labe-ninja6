import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

const BaseCadastro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardCadastro = styled.div`
  display: grid;
  border: 1px solid;
  border-radius: 10px;
  width: 400px;
  height: 400px;
  align-items: center;
  justify-items: center;
  padding: 15px;
  text-align: center;
`;

export class PrestadorServico extends Component {
  state = {
    titulo: "",
    descricao: "",
    preco: "",
    tiposDePagamentos: [],
    dataCalendario: "",

    servicosCadastrados: [],
  };

  manusearTitulo = (event) => {
    this.setState({ titulo: event.target.value });
  };

  manusearDescricao = (event) => {
    this.setState({ descricao: event.target.value });
  };

  manusearPreco = (event) => {
    this.setState({ preco: event.target.value });
  };

  manusearFormaPagamento = (event) => {
    this.setState({ tiposDePagamentos: event.target.value });
  };

  manusearData = (event) => {
    this.setState({ dataCalendario: event.target.value });
  };

  fazCadastro = () => {
    const body = {
      title: this.state.titulo,
      description: this.state.descricao,
      price: this.state.preco,
      paymentMethods: this.state.tiposDePagamentos,
      dueDate: this.state.dataCalendario,
    };

    axios
      .post("https://labeninjas.herokuapp.com/jobs", body, {
        headers: {
          Authorization: "c523c7b3-fa48-4fbe-be79-c362eadb2683",
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        alert(`Não foi possivel fazer o cadastro, motivo: ${error}`);
      });
  };

  render() {
    return (
      <BaseCadastro>
        <CardCadastro>
          <h2> Cadastre seu Serviço ou Produto! </h2>

          <input
            value={this.state.titulo}
            onChange={this.manusearTitulo}
            placeholder="Titulo do produto"
          />

          <input
            value={this.state.descricao}
            onChange={this.manusearDescricao}
            placeholder="Descrição do produto"
          />

          <input
          type="number"
            value={this.state.preco}
            onChange={this.manusearPreco}
            placeholder="Preço do produto"
          />

          
            <select
              value={this.state.tiposDePagamentos}
              onChange={this.manusearFormaPagamento}
            >
              <option value="pix"> Pix </option>
              <option value="boleto"> Boleto </option>
              <option value="debito"> Débito </option>
              <option value="credito"> Credito </option>
              <option value="paypal"> PayPal</option>
            </select>
          

          <input
            value={this.state.dataCalendario}
            onChange={this.manusearData}
            type="date"
          />

          <button onClick={this.fazCadastro}> Cadastrar Produto </button>
        </CardCadastro>
      </BaseCadastro>
    );
  }
}
