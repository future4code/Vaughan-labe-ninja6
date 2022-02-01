import React from "react";



export class Header extends React.Component  {


    render() {
      return (
        <div>
          <h1>LabeNinjas</h1>
          <button onClick={this.props.goToHome} > Home</button>
          <button onClick={this.props.goToCart}>Carrinho</button>
        </div>
      );
    }
  }

  
  