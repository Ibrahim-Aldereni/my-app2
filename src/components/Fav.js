import React, { Component } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import UpdateModal from "./UpdateModal";

class Fav extends Component {
  state = {
    favData: [],
    err: "",
    show: false,
    modalObj: {},
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

  deleteFav = (i) => {
    let name = this.state.favData[i].name;

    let url = `${process.env.REACT_APP_SERVER}/deleteFavData/${name}`;

    axios
      .delete(url)
      .then((response) => {
        this.setState({ favData: response.data });
      })
      .catch((err) => {
        this.setState({ err: err.message });
      });
  };

  updateFav = (i) => {
    this.setState({ show: true, modalObj: this.state.favData[i] });
  };

  closeModal = () => {
    this.setState({ show: false });
  };

  updateData = (e) => {
    e.preventDefault();
    let url2 = `${process.env.REACT_APP_SERVER}/updateFavData`;

    let newdata = {
      name: e.target.name.value,
      url: e.target.url.value,
      target: this.state.modalObj.name,
    };

    axios
      .put(url2, newdata)
      .then((response) => {
        this.setState({ favData: response.data });
      })
      .catch((err) => {
        this.setState({ err: err.message });
      });

    this.closeModal();
  };

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
                    <Button variant="primary" onClick={() => this.deleteFav(i)}>
                      delete
                    </Button>
                    <Button variant="primary" onClick={() => this.updateFav(i)}>
                      Update
                    </Button>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        )}
        <UpdateModal
          show={this.state.show}
          closeModal={this.closeModal}
          modalObj={this.state.modalObj}
          updateData={this.updateData}
        />
      </div>
    );
  }
}

export default Fav;
