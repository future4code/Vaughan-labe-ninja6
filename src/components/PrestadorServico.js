import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {FormControlLabel} from "@material-ui/core";
import {Checkbox} from "@material-ui/core";


const BaseCadastro = styled.div`
  background-color: #7c66c5;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const CardCadastro = styled.div`
  display: grid;
  border: none;
  border-radius: 10px;
  box-shadow: 5px 3px 5px;
  width: 480px;
  height: 500px;
  align-items: center;
  padding: 50px;
  text-align: center;
  background-color: white;
`;

const H2 = styled.h2`
  color:#7c66c5;
`
const H4 = styled.h4`
  color:#7c66c5;
`
const SeletorPagamento = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 2px;


`
const InputData = styled.input`
  background-color: #3F51B5;
  border: 1px solid #666666;
  border-radius: 3px;
  margin-bottom: 20px;
  color: white;
  text-align: center;
  padding: 3px;
`

export class PrestadorServico extends Component {

  state = {
    titulo: "",
    descricao: "",
    preco: "",
    tiposDePagamentos: [],
    dataCalendario: "",

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
    const novoValor = [...this.state.tiposDePagamentos]
    novoValor.push(event.target.value)
    this.setState({ tiposDePagamentos: novoValor });
  };

  manusearData = (event) => {
    this.setState({ dataCalendario: event.target.value });
  };

  fazCadastro = () => {
    const body = {
      title: this.state.titulo,
      description: this.state.descricao,
      price: Number(this.state.preco),
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
        this.setState({
        titulo: "",
        descricao: "",
        preco: "",
        dataCalendario: ""
      })
      alert("Serviço criado com sucesso!")
      })
      .catch((error) => {
        alert(`Não foi possivel fazer o cadastro, motivo: ${error}`);
      });
  };

  render() {
    return (

      <BaseCadastro>
        <CardCadastro>
          
          <H2> Cadastre seu Serviço ou Produto </H2>
          
          <TextField id="outlined-basic" label="Titilo" variant="outlined"
            value={this.state.titulo}
            onChange={this.manusearTitulo}
          /> 
          <br/>

          <TextField id="outlined-basic" label="Descrição" variant="outlined"
            value={this.state.descricao}
            onChange={this.manusearDescricao}
          />
          <br/>

          <TextField id="outlined-basic" label=" Valor a ser cobrado " variant="outlined"
          type="number"
            value={this.state.preco}
            onChange={this.manusearPreco}
          />

        <H4> Como gostaria de receber por isso. </H4>

        <SeletorPagamento
        
        value={this.state.tiposDePagamentos}
        onChange={this.manusearFormaPagamento}

        >
        
        <FormControlLabel option value="PIX" control={<Checkbox defaultChecked color="primary" />}  label="Pix"  />
        <FormControlLabel option value="PAYPAL" control={<Checkbox defaultChecked color="primary" />} label="PayPal" />
        <FormControlLabel option value="DEBITO" control={<Checkbox defaultChecked color="primary" />} label="Debito" />
        <FormControlLabel option value="CRÉDITO" control={<Checkbox defaultChecked color="primary" />} label="Crédito" />
        <FormControlLabel option value="BOLETO" control={<Checkbox defaultChecked color="primary" />} label="Boleto" />

        </SeletorPagamento>
        
        <H4> Data limite para que vença sua proposta. </H4>
          <InputData
            value={this.state.dataCalendario}
            onChange={this.manusearData}
            type="date"
            variant="contained"
          />
          
          <Button

            onClick={this.props.goToClient}
            variant="contained"
            color="primary"
            onClick={this.fazCadastro}> Cadastrar
            
          </Button>

        </CardCadastro>
      </BaseCadastro>
    );
  }
}
