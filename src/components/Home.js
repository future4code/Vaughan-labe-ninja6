import React, { Component } from "react";
import PrestadorServico from "./PrestadorServico";

export class Home extends Component {


  render() {
    return (
      <div>
            <h1>LabeNinjas</h1>
        <h3>O talento certo no momento certo</h3>
        <button onClick={this.props.goToService}>Quero ser um ninja</button>
        <button onClick={this.props.goToClient}>Contratar um ninja</button>
      </div>
    );
  }
}
