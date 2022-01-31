import React, { Component } from 'react'


export class AppContainer extends Component {

  state = {
    currentScreen: "home"
  }

  goToClient = () => {
    this.setState({currentScreen: "cliente"})
    console.log("clicou no botão para ir no cliente")
  }

  goToService = () => {
    this.setState({currentScreen: "prestador"})
  }

  chooseScreen = () => {
switch(this.state.currentScreen){
  case "home": 
  return <AppContainer />
  case "prestador" :
    return <PrestadorServico/>
    case "cliente":
    return //Componente cliente
    default :
    return <AppContainer />
}
  }

  

  render() {
    return (
      <div>
        <button onClick={this.goToService}>Quero ser um ninja</button>
        <button onClick={this.goToClient}>Contratar um ninja</button>

        {this.chooseScreen()}
      </div>
    )
  }
}
