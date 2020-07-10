/* eslint-disable */
import React from "react";
import styles from "@/components/menu.less";

class Menu extends React.Component {
  onClick = (query) => {
    window.location.replace(`?query=${query}`);
  };

  render() {
    const links = [
      {
        title: "All",
        query: "stars:>1+language:all",
      },
      {
        title: "JavaScript",
        query: "stars:>1+language:javascript",
      },
      {
        title: "Ruby",
        query: "stars:>1+language:ruby",
      },
      {
        title: "Java",
        query: "stars:>1+language:java",
      },
      {
        title: "CSS",
        query: "stars:>1+language:css",
      },
    ];

    const menu = links.map((item, key) => (
      <li key={key}>
        <a role="link" onClick={() => this.onClick(item.query)}>
          {item.title}
        </a>
      </li>
    ));

    return <div className={styles.menu}>{menu}</div>;
  }
}

export default Menu;
