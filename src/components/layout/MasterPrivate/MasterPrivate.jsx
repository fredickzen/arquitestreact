import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import BannerSeguros from "./features/BannerSeguros";

const MasterPrivate = ({ children }) => {

    const MasterPrivateNav = () => (
        <>
            <Link to="/" style={{ color: "white" }}>Home</Link> &nbsp;
            <Link to="/about" style={{ color: "white" }}>About</Link> &nbsp;
            <Link to="/users" style={{ color: "white" }}>Users</Link>
        </>
    )

    return (
        <div>
            <BannerSeguros/>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="/">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <MasterPrivateNav />
                </Nav>
            </Navbar>
            {children}
        </div>
    );
};

export default MasterPrivate;
