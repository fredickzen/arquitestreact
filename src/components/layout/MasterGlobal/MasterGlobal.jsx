import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const MasterGlobal = ({ children }) => {
  const MasterGlobalNav = () => (
    <>
      <Link to="/"> Home</Link>
    </>
  );

  return (
    <div>
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>
            <Link to="/"> Navbar</Link>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <MasterGlobalNav />
          </Nav>
        </Navbar>
        <br />
      </>
      {children}
    </div>
  );
};

export default MasterGlobal;
