import React, { Component } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";

class Fav extends Component {
  state = {
    favData: [],
    err: "",
  };

  componentDidMount() {
    let url = `${process.env.REACT_APP_SERVER}/getFavData`;

    axios
      .get(url)
      .then((response) => {
        this.setState({ favData: response.data });
      })
      .catch((err) => {
        this.setState({ err: err.message });
      });
  }

  render() {
    return (
      <div>
        {this.state.err ? (
          <p>{this.state.err}</p>
        ) : (
          <div className="card-container">
            {this.state.favData.map((item, i) => {
              return (
                <Card style={{ width: "18rem" }} key={i}>
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.url}</Card.Text>
                    <Button variant="primary">delete</Button>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default Fav;
