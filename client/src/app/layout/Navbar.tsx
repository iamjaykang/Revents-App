import React from "react";
import logo from "../../assets/images/logo.png";
import { Button, Container, Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} to="/" header>
          <img src={logo} alt="logo" style={{ marginRight: "10px" }} />
          Reactivities
        </Menu.Item>
        <Menu.Item as={NavLink} to="/activities" name="Activities" />
        <Menu.Item as={NavLink} to="/errors" name="Errors" />
        <Menu.Item>
          <Button
            as={NavLink}
            to="/create-activity"
            positive
            content="Create Activity"
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default Navbar;
