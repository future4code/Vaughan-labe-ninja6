import React from "react";
import { AppContainer } from "./components/AppContainer";
import { Header } from "./components/Header";

class App extends React.Component {
  state = {
    currentScreen: "home",
  };

  goToHome = () => {
    this.setState({ currentScreen: "home"})
    console.log("cliquei no botao home");
  }

  goToClient = () => {
    this.setState({ currentScreen: "cliente" });
    console.log("clicou no botão para ir no cliente");
  };

  goToService = () => {
    this.setState({ currentScreen: "prestador" });
  };

  chooseScreen = () => {
    switch (this.state.currentScreen) {
      case "home":
        return <AppContainer />;
      case "prestador":
        return;
      case "cliente":
        return; //Componente cliente
      default:
        return <AppContainer />;
    }
  };

  render() {
    return (
      <div>
        <Header
        goToHome={this.props.goToHome }
        />
        <h1>LabeNinjas</h1>
        <h3>O talento certo no momento certo</h3>
        <button onClick={this.goToService}>Quero ser um ninja</button>
        <button onClick={this.goToClient}>Contratar um ninja</button>
        {this.chooseScreen()}
      </div>
    );
  }
}

export default App;
