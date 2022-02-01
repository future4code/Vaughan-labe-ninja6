import axios from "axios";
import React from "react";
import styled from "styled-components";



const BaseCadastro = styled.div`

    display: grid;
    justify-content: center;
    align-items: center;  
    margin-top: 300px;
`


const CardCadastro = styled.div`

    display: grid;
    border: 1px solid;
    border-radius: 10px;
    width: 400px;
    height: 400px;
    justify-content: center;
    align-items: center;
    justify-items: center;
    padding: 15px;
    text-align: center;
`


class Cadastro extends React.Component {

    state = {

        title: "",
        description: "",
        price: 0,
        paymentMethods:[],
        dueDate: "",

    }

    manusearTitulo = (event) => {
        this.setState({title : event.target.value})
    }

    manusearDescricao = (event) => {
        this.setState({description : event.target.value})
    }

    manusearPreco = (event) => {
        this.setState({price : event.target.value})
    }

    manusearFormaPagamento = (event) => {
        this.setState({paymentMethods: event.target.value})
        console.log(this.state.paymentMethods)
    }

    manusearData = (event) => {
        this.setState({dueDate : event.target.value})
    }


    fazCadastro = () => {
         
        const url = "https://labeninjas.herokuapp.com/jobs"

        const body = {

        title : this.state.title,
        description : this.state.description,
        price : this.state.price,
        paymentMethods : this.state.paymentMethods,
        dueDate : this.state.dueDate,

        }

        axios.post(url, body, {headers: {
            Authorization:"c523c7b3-fa48-4fbe-be79-c362eadb2683"}})

        .then((resp)=>{
            // alert(resp)
            console.log(resp.data)
        })

        .catch((error)=> {
            alert(`Não foi possivel fazer o cadastro, motivo: ${error}`)
        })

    }

    render() {
  
    return (
        
  
      <BaseCadastro>
        <CardCadastro>

            <h2> Cadastre seu Serviço ou Produto! </h2>

                <input value={this.state.title} onChange={this.manusearTitulo} placeholder="Titulo do produto" />
            
                <input value={this.state.description} onChange={this.manusearDescricao} placeholder="Descrição do produto" /> 
            
                <input type="number" value={this.state.price} onChange={this.manusearPreco} placeholder="Preço do produto" />

            <form>

                <select onChange={this.manusearFormaPagamento}>

                <option value="pix"> PIX </option>
                <option value="boleto"> BOLETO </option>
                <option value="debito"> DEBITO </option>
                <option value="credito"> CREDITO </option>
                <option value="paypal"> PAYPAL</option>
            

                </select>

            </form>

            <input value={this.state.dueDate} onChange={this.manusearData} type="date" />

            <button onClick={this.fazCadastro}> Cadastrar Produto </button>


        </CardCadastro>
      </BaseCadastro>
  
      );
    }
  }









  export default Cadastro;