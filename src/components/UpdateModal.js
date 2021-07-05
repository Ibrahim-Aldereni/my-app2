import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";

class UpdateModal extends Component {
  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Update FORM</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.props.updateData}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  name="name"
                  defaultValue={this.props.modalObj.name}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>url</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter url"
                  name="url"
                  defaultValue={this.props.modalObj.url}
                />
              </Form.Group>
              <button className="btn btn-primary">Save Changes</button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default UpdateModal;
