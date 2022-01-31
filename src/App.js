import React from "react";
import { AppContainer } from "./components/AppContainer";
import Clients from "./components/Clients";

class App extends React.Component {
  state = {
    currentScreen: "home",
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
        return;
      case "cliente":
        return <Clients />;
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
