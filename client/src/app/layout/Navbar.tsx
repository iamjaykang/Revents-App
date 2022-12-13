import React from "react";
import logo from "../../assets/images/logo.png";
import { Button, Container, Dropdown, Image, Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { useStore } from "../stores/store";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";

const Navbar = () => {
  const { userStore } = useStore();

  const { user, logout } = userStore;
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
        <Menu.Item position="right">
          <Image
            src={user?.image || require("../../assets/images/user.png")}
            avatar
            spaced="right"
          />
          <Dropdown pointing="top left" text={user?.displayName}>
            <Dropdown.Menu>
              <Dropdown.Item
                as={Link}
                to={`/profiles/${user?.username}`}
                text="My Profile"
                icon="user"
              />
              <Dropdown.Item onClick={logout} text="Logout" icon="power" />
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default observer(Navbar);
