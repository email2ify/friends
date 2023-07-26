import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import Display from "./Display";
import axios from "axios";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import { removeTokenTimestamp } from "../utils/utils";


const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  // applying toggle on NavBar dropdown menu
  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  /*
    Handles user logout and
    redirects to the landing page
  */

  // A state to manage the display of the "Thank You" modal
  const [showThankYouModal, setShowThankYouModal] = useState(false);

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
      removeTokenTimestamp();
      setShowThankYouModal(true); // Show the "Thank You" modal
    } catch (err) {
      
    }
  };

  const addPostIcon = (
    <NavLink
      className={styles.NavLink}
      activeClassName={styles.Active}
      to="/posts/create"
    >
      <i className="far fa-plus-square"></i>Add post
    </NavLink>
  );
  const loggedInIcons = (
    <>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/contact"
      >
        <i className="fas fa-envelope"></i>Contact
      </NavLink>


      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/feed"
      >
        <i className="fas fa-stream"></i>Feed
      </NavLink>

      <NavLink className={styles.NavLink} to="/" onClick={handleSignOut}>
        <i className="fas fa-sign-out-alt"></i>Sign out
      </NavLink>
      <NavLink
        className={styles.NavLink}
        to={`/profiles/${currentUser?.profile_id}`}
      >
        <Display src={currentUser?.profile_image} text="Profile" height={40} />
      </NavLink>
    </>
  );
  //const loggedInIcons = <>{currentUser?.username}</>;
  const loggedOutIcons = (
    <>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/contact"
      >
        <i className="fas fa-envelope"></i>Contact
      </NavLink>


      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/signin"
      >
        <i className="fas fa-sign-in-alt"></i>Sign in
      </NavLink>
      <NavLink
        to="/signup"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <i className="fas fa-user-plus"></i>Sign up
      </NavLink>
    </>
  );

  return (
    <Navbar
      expanded={expanded}
      className={styles.NavBar}
      expand="md"
      fixed="top"
    >
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="45" />
          </Navbar.Brand>
        </NavLink>
        {currentUser && addPostIcon}
        <Navbar.Toggle
          ref={ref}
          onClick={() => setExpanded(!expanded)}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <NavLink
              exact
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/"
            >
              <i className="fas fa-home"></i>Home
            </NavLink>

            <NavLink
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/specie"
            >
              <i className="fas fa-dog"></i>Species
            </NavLink>

            <NavLink
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/countries"
            >
              <i className="fas fa-globe"></i>Countries
            </NavLink>

            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    <Modal show={showThankYouModal} onHide={() => setShowThankYouModal(false)} centered={true}>
      <Modal.Header closeButton>
        <Modal.Title>Goodbye!</Modal.Title>
      </Modal.Header>
      <Modal.Body>Thank you for visiting, see you soon!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowThankYouModal(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
    </Navbar>
  );
};

export default NavBar;
