import React, { Component } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";

class Home extends Component {
  state = {
    allData: [],
    err: "",
  };

  componentDidMount = () => {
    const url = `${process.env.REACT_APP_SERVER}/allData`;

    axios
      .get(url)
      .then((response) => {
        this.setState({ allData: response.data });
      })
      .catch((err) => {
        this.setState({ err: err.message });
      });
  };

  addFav = (i) => {
    let targetData = this.state.allData[i];

    let dataBody = {
      name: targetData.name,
      url: targetData.url,
    };

    const url = `${process.env.REACT_APP_SERVER}/addFav`;

    axios
      .post(url, dataBody)
      .then((reponse) => {
        console.log(reponse.data);
      })
      .catch((err) => {
        this.setState({ err: err.message });
      });
  };

  render() {
    return (
      <div>
        {this.state.err ? (
          <p>{this.state.err}</p>
        ) : (
          <div className="card-container">
            {this.state.allData.map((item, i) => {
              return (
                <Card style={{ width: "18rem" }} key={i}>
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.url}</Card.Text>
                    <Button variant="primary" onClick={() => this.addFav(i)}>
                      Add fav
                    </Button>
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

export default Home;
