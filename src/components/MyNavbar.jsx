import React, { Component } from "react";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { BsBellFill, BsSearch } from "react-icons/bs";

class MyNavbar extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Navbar.Brand>
            <img src="netflix_logo.png" id="logo" height="48" alt="logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link href="#pricing" className="text-white">
                TV Shows
              </Nav.Link>
              <Nav.Link href="#pricing" className="text-white">
                Recently Added
              </Nav.Link>
              <Nav.Link href="#pricing" className="text-white">
                My List
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className="text-white">
                <BsSearch size="1.3rem" />
              </Nav.Link>
              <Nav.Link href="#memes" className="text-white">
                KIDS
              </Nav.Link>
              <Nav.Link className="text-white">
                <BsBellFill size="1.3rem" />
              </Nav.Link>
            </Nav>
            <Dropdown>
              <Dropdown.Toggle variant="secondary">
                <img
                  src="avatar.png"
                  alt=""
                  style={{ width: "30px", height: "30px" }}
                />
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-right">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default MyNavbar;
