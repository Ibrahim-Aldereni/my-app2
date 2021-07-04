import React, { Component } from "react";
import { Navbar } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <Navbar bg="dark" variant="dark">
          <p>©️ copyright - ibrahim</p>
        </Navbar>
      </div>
    );
  }
}

export default Footer;
