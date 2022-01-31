import React from "react";



export class Header extends React.Component  {


    render() {
      return (
        <div>
          <h1>LabeNinjas</h1>
          <button OnClick={this.props.goToHome} > Home</button>
          <button OnClick={this.props.goToCart}>Carrinho</button>
        </div>
      );
    }
  }

  
  