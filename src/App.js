import React from "react";
import { Home } from "./components/Home";
import { Header } from "./components/Header";
import { PrestadorServico } from "./components/PrestadorServico";
import Clients from "./components/Clients";
import {Cart} from "./components/Cart"

class App extends React.Component {
  state = {
    currentScreen: "home",
  };

  goToHome = () => {
    this.setState({ currentScreen: "home" });
  };

  goToClient = () => {
    this.setState({ currentScreen: "cliente" });
    console.log("clicou no botão para ir no cliente");
  };

  goToService = () => {
    this.setState({ currentScreen: "prestador" });
  };

  goToCart = () => {
    this.setState({ currentScreen: "carrinho" });
  };

  chooseScreen = () => {
    switch (this.state.currentScreen) {
      case "home":
        return (
          <Home goToService={this.goToService} goToClient={this.goToClient}
           />
        );
      case "prestador":
        return <PrestadorServico goToHome={this.goToHome} />;
      case "cliente":
        return <Clients />;
        case "carrinho":
          return (
            <Cart />
          )
      default:
        return (
          <Home goToService={this.goToService} goToClient={this.goToClient} />
        );
       
    }
  };

  render() {
    return (
      <div>
        <Header goToHome={this.goToHome} goToCart={this.goToCart}/>
        {this.chooseScreen()}
      </div>
    );
  }
}

export default App;
