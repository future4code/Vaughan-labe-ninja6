import React from "react";
import { Home } from "./components/Home";
import { Header } from "./components/Header";
import { PrestadorServico } from "./components/PrestadorServico";
import Clients from "./components/Clients";
import {Cart} from "./components/Cart"
import axios from "axios";

class App extends React.Component {
  state = {
    currentScreen: "home",
    jobsOnCart: [],
  };

  addCart = (job) => {
    axios.get(`https://labeninjas.herokuapp.com/jobs/${job.id}`, {
      headers:{
          Authorization: "c523c7b3-fa48-4fbe-be79-c362eadb2683",
      }
  }).then((response) => {
    const idProductCart = [...this.state.cart]
    idProductCart.push(response.data)
      this.setState({cart : idProductCart})
      console.log(this.state.cart)
  }).catch((error) => {
      console.log(error.message)
  })
  }

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

  addJobToCart = (job) => {
    const newJob = [...this.state.jobsOnCart];
    newJob.push(job);
    this.setState({
      jobsOnCart: newJob,
    });
  };

  removeJobFromCart = (job) => {
    const itemDelete = job.id
    console.log("job selecionado delete", job);
    
    const removeItem = this.state.jobsOnCart.filter((job) => {
      return job.id !== itemDelete;
    });

    this.setState({jobsOnCart: removeItem})
    
  };

  chooseScreen = () => {
    switch (this.state.currentScreen) {
      case "home":
        return (
          <Home goToService={this.goToService} goToClient={this.goToClient} />
        );
      case "prestador":
        return <PrestadorServico goToHome={this.goToHome} />;
      case "cliente":
        return <Clients addJobToCart={this.addJobToCart} />;
      case "carrinho":
        return (
          <Cart
            jobsOnCart={this.state.jobsOnCart}
            removeJobFromCart={this.removeJobFromCart}
          />
        );
      default:
        return (
          <Home goToService={this.goToService} goToClient={this.goToClient} />
        );
    }
  };

  render() {
    console.log("Adicionando job no carrinho", this.state.jobsOnCart);
    return (
      <div>
        <Header goToHome={this.goToHome} goToCart={this.goToCart} goToHomeTitle={this.goToHome}/>
        {this.chooseScreen()}
      </div>
    );
  }
}

export default App;
