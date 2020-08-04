import React from "react";
import { NavLink } from "react-router-dom";
import styles from "@/components/Nav.less";

class Nav extends React.Component {
  render() {
    return (
      <div>
        <ul
          style={{
            margin: 0,
            padding: 0,
            listStyle: "none",
            display: "flex",
          }}
        >
          <li>
            <NavLink
              activeClassName={styles.popularbtn}
              style={{
                display: "inline-flex",
                padding: 16,
                fontSize: 18,
                textDecoration: "none",
                color: "rgba(0,0,0,0.65)",
              }}
              exact
              to="/"
            >
              Popular
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName={styles.battlebtn}
              style={{
                display: "inline-flex",
                padding: 16,
                fontSize: 18,
                textDecoration: "none",
                color: "rgba(0,0,0,0.65)",
              }}
              to="/battle"
            >
              Battle
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
