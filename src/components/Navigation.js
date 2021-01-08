import React from "react";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import styles from "./Navigation.module.scss";

const Navigation = ({ history }) => {
  return (
    <SideNav
      className={styles.sideNav}
      onSelect={(selected) => {
        const to = "/" + selected;
        if (location.pathname !== to) {
          history.push(to);
        }
      }}
    >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
          <NavIcon className={styles.navIcon}>
            <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
          </NavIcon>
          <NavText>Home</NavText>
        </NavItem>
        <NavItem eventKey="trade">
          <NavIcon>
            <i
              className="fa fa-fw fa-exchange"
              style={{ fontSize: "1.75em" }}
            />
          </NavIcon>
          <NavText>Trade</NavText>
        </NavItem>
        <NavItem eventKey="explorer">
          <NavIcon>
            <i className="fa fa-fw fa-search" style={{ fontSize: "1.75em" }} />
          </NavIcon>
          <NavText>Explorer</NavText>
          <NavItem eventKey="pairs">
            <NavText>Pairs</NavText>
          </NavItem>
          <NavItem eventKey="pools">
            <NavText>Pools</NavText>
          </NavItem>
          <NavItem eventKey="contracts">
            <NavText>Contracts</NavText>
          </NavItem>
        </NavItem>
        <NavItem eventKey="tracker">
          <NavIcon>
            <i className="fa fa-fw fa-eye" style={{ fontSize: "1.75em" }} />
          </NavIcon>
          <NavText>Tracker</NavText>
          <NavItem eventKey="addreses">
            <NavText>Addresses</NavText>
          </NavItem>
          <NavItem eventKey="tokens">
            <NavText>Tokens</NavText>
          </NavItem>
          <NavItem eventKey="listings">
            <NavText>Listings</NavText>
          </NavItem>
        </NavItem>
        <NavItem eventKey="settings">
          <NavIcon>
            <i className="fa fa-fw fa-gear" style={{ fontSize: "1.75em" }} />
          </NavIcon>
          <NavText>Settings</NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
};

export default Navigation;
