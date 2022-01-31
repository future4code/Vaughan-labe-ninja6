import React from 'react';


// O nome "card" está somente como exemplo, esperando o produto "card" ser criado.

class Filtros extends React.Component {
    state = {
    
        busca: "",
        valorMinimo: "",
        valorMaximo: ""
        
    };
    
    onChangeAtualizacaoDaBusca=(event) => {
        this.setState ({
           busca: event.target.value })
    }
    onChangeAtualizacaoDoMinimo=(event) => {
        this.setState ({
           valorMinimo: event.target.value })
    }
    onChangeAtualizacaoDoMaximo=(event) => {
        this.setState ({
           valorMaximo: event.target.value })
    }
    
    filtrar = () => {
       
        this.props.produtos = this.props.card.filter(card => {
        return card.nome.toLowerCase().includes(this.state.busca.toLowerCase())
        })
        .filter(card => {
        return this.state.valorMinimo === "" || card.valor >= this.state.valorMinimo
        })
        .filter(card => {
        return this.state.valorMaximo === "" || card.valor <= this.state.valorMaximo
        })
        console.log(this.props.card.length)
    }
        
    render() {

    return (
    <div>     
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
     
    </div>

    )
    };
}
export default Filtros;