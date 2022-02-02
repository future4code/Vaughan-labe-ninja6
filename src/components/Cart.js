import React from "react";
import Clients from "./Clients";
import axios from "axios";

export class Cart extends React.Component {
  getInicialState() {
    return {
      jobsOnCart: [],
    };
  }

  removeJobFromCart = (id) => {
    const removeItem = this.props.jobsOnCart.filter((job) => {
      if (id !== job.id) {
        return job;
      }
    });
    return removeItem;
  };

  render() {
    console.log(this.props.jobsOnCart);

    this.getInicialState();

    const cartList = this.props.jobsOnCart.map((job) => {
      return (
        <div key={job.id}>
          <h4>{job.title}</h4>
          <p>{job.description}</p>
          <p>{job.price}</p>
          <button onClick={() => this.props.removeJobFromCart(job)}>
            Remover
          </button>
        </div>
      );
    });

    // const { jobsOnCart } = this.props;

    return (
      <div>
        <h3>carrinho</h3>

        {cartList}
      </div>
    );
  }
}
