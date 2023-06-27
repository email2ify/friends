import React, { useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Container from "react-bootstrap/Container";

import { Link, useHistory } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import { useRedirect } from "../../hooks/useRedirect";
import { setTokenTimestamp } from "../../utils/utils";

function SignInForm() {
  const setCurrentUser = useSetCurrentUser();
  useRedirect("loggedIn");

  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = signInData;

  const [errors, setErrors] = useState({});

  const history = useHistory();
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await axios.post("/dj-rest-auth/login/", signInData);
      setCurrentUser(data.user);
      setTokenTimestamp(data);
      history.goBack();
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  const handleChange = (event) => {
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Container className="px-1">
    <Row className={styles.Row}>
      <Col className="my-auto p-0 p-md-2" md={{offset:2, span:8}} lg={{offset:3, span:6}}>
        <Card>
          <Card.Title>
            <h1 className={styles.Header}>sign in</h1>
          </Card.Title>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="username">
                <Form.Label className="d-none">Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  name="username"
                  className={styles.Input}
                  value={username}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors.username?.map((message, idx) => (
                <Alert key={idx} variant="warning">
                  {message}
                </Alert>
              ))}

              <Form.Group controlId="password">
                <Form.Label className="d-none">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  className={styles.Input}
                  value={password}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors.password?.map((message, idx) => (
                <Alert key={idx} variant="warning">
                  {message}
                </Alert>
              ))}
              <Button
                className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
                type="submit"
              >
                Sign in
              </Button>
              {errors.non_field_errors?.map((message, idx) => (
                <Alert key={idx} variant="warning" className="mt-3">
                  {message}
                </Alert>
              ))}
            </Form>
            <p className={`mt-4 ${appStyles.Content}`}>
              <Link className={styles.Link} to="/signup">
                Don't have an account? <span>Sign up now!</span>
              </Link>
            </p>
          </Card.Body>
        </Card>
      </Col>
      {/* <Col
        md={6}
        className={`my-auto d-none d-md-block p-2 ${styles.SignInCol}`}
        >

      </Col> */}
    </Row>
  </Container>
  );
}

export default SignInForm;