import React, { Component } from "react";
import { Link, Outlet, Route, Routes, NavLink } from "react-router-dom";
import AboutCompany from "./AboutCompany";
import AboutTeam from "./AboutTeam";
class About extends Component {
  constructor() {
    super();
    console.log("in constructor");
    //   this.handleCLick = this.handleCLick.bind(this);
  }
  state = {
    count: 0,
  };
  handleCLick = () => {
    this.setState({ count: 55 });
  };
  //   componentDidMount() {
  //     console.log("in mount did");
  //   }
  componentDidUpdate() {
    console.log("in update did");
  }
  render() {
    // console.log("in render");
    return (
      <div className="container">
        <h1>About Page</h1>
        <div className="row">
          <div className="col-3 border-end border-2  border-danger">
            <NavLink
              className="d-block text-decoration-none p-2 link-secondary"
              to={"/about/team"}
            >
              {" "}
              About My Team
            </NavLink>
            <NavLink
              className="d-block text-decoration-none p-2 link-secondary"
              to={"/about/company"}
            >
              {" "}
              About My Company
            </NavLink>
          </div>
          <div className="col-9">
            {/* <Routes>
              <Route path="team" element={<AboutTeam />} />
              <Route path="company" element={<AboutCompany />} />
            </Routes> */}
            <Outlet />
          </div>
        </div>

        {/* <div>{this.state.count}</div>
        <button
          onClick={this.handleCLick}
          type="button"
          className="btn btn-success ms-2"
        >
          +
        </button> */}
      </div>
    );
  }
}

export default About;
