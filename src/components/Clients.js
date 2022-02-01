import React from "react";
import axios from "axios";
import styled from "styled-components";
// import JobDetails from "./JobDetails";

const JobCards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
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
    jobs: []
  };

  componentDidMount() {
    this.getAllJobs();
  }

  getAllJobs = () => {
    const url =
      "https://labeninjas.herokuapp.com/jobs";
    const config = {
      headers: {
        Authorization: "c523c7b3-fa48-4fbe-be79-c362eadb2683",
      },
    };
    axios
      .get(url, config)
      .then((response) => {
        this.setState({ 
          jobs: response.data.jobs
         });
        // console.log(response.data);
        console.log(this.state.jobs);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  render() {
    
    
    const jobcard = this.state.jobs.map((job) => {
      return (
        <JobCards>
          <h1>{job.title}</h1>
          <p>{job.description}</p>
        </JobCards>
      );
    });

    return (
      <div>
        <h1>Lista de Jobs</h1>
        {jobcard}
        <button onClick={this.getAllJobs}>Atualizar</button>
      </div>
    );
  }
}