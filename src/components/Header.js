import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>Pockemon</Navbar.Brand>
            <Nav className="me-auto header-nav">
              <Link to="/">Home</Link>
              <Link to="/fav">Favorites</Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Header;
