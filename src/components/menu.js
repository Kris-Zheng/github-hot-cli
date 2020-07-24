/* eslint-disable */
import React, { lazy } from "react";
import styles from "@/components/menu.less";

class Menu extends React.Component {
  onClick = (query) => {
    window.location.replace(`?${query}`);
  };

  render() {
    const current = window.location.search.substr(1);
    const links = [
      {
        title: "All",
        query: "stars:%3E1+language:all",
      },
      {
        title: "JavaScript",
        query: "stars:%3E1+language:javascript",
      },
      {
        title: "Ruby",
        query: "stars:%3E1+language:ruby",
      },
      {
        title: "Java",
        query: "stars:%3E1+language:java",
      },
      {
        title: "CSS",
        query: "stars:%3E1+language:css",
      },
    ];

    const menu = links.map((item, index) => (
      <li key={item.title}>
        <a
          role="link"
          onClick={() => this.onClick(item.query)}
          style={current === item.query ? { color: "#1890ff" } : {}}
        >
          {item.title}
        </a>
      </li>
    ));

    return <div className={styles.menu}>{menu}</div>;
  }
}

export default Menu;
