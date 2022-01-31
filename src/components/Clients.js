import React from "react";
import axios from "axios";
import styled from "styled-components";
// import JobDetails from "./JobDetails";

const JobCards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid black;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  background-color: #f5f5f5;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  cursor: pointer;

  &:hover {
    background-color: #e5e5e5;
  }
`;

export default class Clients extends React.Component {
  state = {
    jobs: [],
    jobClicked: false,
  };

  componentDidMount() {
    this.getAllJobs();
  }

  getAllJobs = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labeninjas/jobs";
    const config = {
      headers: {
        Authorization: "fillipe-correia-vaughan",
      },
    };
    axios
      .get(url, config)
      .then((response) =>
        this.setState({ jobs: response.data.result.list })
      )
      .catch((error) => console.log(error.message));
  };

  render() {
    const jobs = this.state.jobs.map((jobs) => {
      return (
        <JobCards>
          <h4>{jobs.title}</h4>
            <p>{jobs.description}</p>
            <p>{jobs.price}</p>


          {/* {this.renderComponente de detalhe do card()} */}
        </JobCards>
      );
    });

    // let clicked;
    // if (this.state.jobClicked === true) {
    //   clicked = <Componente do detalhe do card />;
    // }

    return (
      <div>
        <h1>Lista de Jobs</h1>
        {jobs}
      </div>
    );
  }
}

