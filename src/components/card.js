import React from "react";
import { Card } from "antd";
import styles from "@/components/Card.less";

class Nmsl extends React.Component {
  render() {
    const { items } = this.props;
    const list = (items || []).map((item, key) => (
      <Card key={key} className={styles.content}>
        <h2 style={{ textAlign: "center" }}>#{key + 1}</h2>
        <div className={styles.avatar}>
          <img
            src={item.owner.avatar_url}
            alt={item.name}
            style={{ width: "50%" }}
          />
        </div>
        <h4 className={styles.title}>{item.full_name}</h4>
        <div>
          <i className="fa fa-user" style={{ color: "rgb(255, 191, 116)" }} />
          <a href={item.owner.html_url} target="_blank" rel="noreferrer">
            {item.name}
          </a>
        </div>
        <div>
          <i className="fa fa-star" style={{ color: "rgb(255, 215, 0)" }} />
          {item.stargazers_count} stars
        </div>
        <div>
          <i
            className="fa fa-code-fork"
            style={{ color: "rgb(129, 195, 245)" }}
          />
          {item.forks} forks
        </div>
        <div>
          <i
            className="fa fa-warning"
            style={{ color: "rgb(241, 138, 147)" }}
          />
          {item.open_issues} Open issues
        </div>
      </Card>
    ));

    return (
      <div className={styles.card}>
        {list}
      </div>
    );
  }
}

export default Nmsl;
