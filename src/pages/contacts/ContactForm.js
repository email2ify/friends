import React, { useState } from "react";
import { Alert, Form, Button, Row, Col, Modal } from "react-bootstrap";
import axios from "axios";
import appStyles from "../../App.module.css";
import { useHistory } from "react-router-dom";

const ContactForm = () => {
  const [form, setForm] = useState({
    reason: "GENERAL",
    name: "",
    email: "",
    message: "",
  });

  const { reason, name, email, message } = form;

  const history = useHistory();
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  /* 
    Handle changes to input fields
  */
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/contact/", form);
      setShowModal(true);
    } catch (err) {
      
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  /* 
    Handle closing of modal
  */
  const handleCloseModal = () => {
    setShowModal(false);
    history.push("/");
  };

  const textFields = (
    <div className="">
      <Form.Group>
        <Form.Label>Reason</Form.Label>

        <Form.Control
          as="select"
          name="reason"
          value={reason}
          onChange={handleChange}
          aria-label="reason"
        >
          <option value="GENERAL">General Enquiry</option>
          <option value="LOGIN">Login Issue</option>
          <option value="REPORT_POST">Report a Post</option>
          <option value="DELETE_ACCOUNT">Delete Account</option>
        </Form.Control>
      </Form.Group>

      {errors?.reason?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Name</Form.Label>

        <Form.Control
          as="input"
          name="name"
          value={name}
          onChange={handleChange}
          aria-label="name"
        ></Form.Control>
      </Form.Group>

      {errors?.name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Email</Form.Label>

        <Form.Control
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          aria-label="email"
        ></Form.Control>
      </Form.Group>

      {errors?.email?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          name="message"
          value={message}
          onChange={handleChange}
          aria-label="message"
          rows={7}
        ></Form.Control>
      </Form.Group>

      {errors?.message?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <div
        className={`${appStyles.FlexDisplay}  ${appStyles.JustifyContentCenter}`}
      >
        <Button
          className={`${appStyles.Button} bg-secondary`}
          onClick={() => history.goBack()}
        >
          Cancel
        </Button>
        <Button className={`${appStyles.Button}`} type="submit">
          Submit
        </Button>
        
      </div>
    </div>
  );

  /* 
    Returns contact form page
  */
  return (
    
    <Row  className="mt-3 mb-5 mx-1">
      <Col className="my-auto p-0 p-md-2" md={{offset:2, span:8}} lg={{offset:3, span:6}}>
        <Form onSubmit={handleSubmit}>
          {showModal && (
            <Modal show={showModal} onHide={handleCloseModal} centered={true}>
              <Modal.Header closeButton>
                <Modal.Title>Success</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Thank you for contacting us, we will get back to you shortly!
              </Modal.Body>
              <Modal.Footer>''
                <Button variant="secondary" onClick={handleCloseModal}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          )}
          <div>

            <h3>Contact us</h3>
            <div >{textFields}</div>
          </div>
        </Form>
      </Col>
    </Row>
  );
};

export default ContactForm;