import React from "react";
import { AppContainer } from "./components/AppContainer";

class App extends React.Component {
  state = {
    currentScreem: "home",
  };

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
        return 
      case "cliente":
        return; //Componente cliente
      default:
        return <AppContainer />;
    }
  };

  render() {
    return (
      <div>
        
        <button onClick={this.goToService}>Quero ser um ninja</button>
        <button onClick={this.goToClient}>Contratar um ninja</button>
        {this.chooseScreen()}
      </div>
    );
  }
}

export default App;
