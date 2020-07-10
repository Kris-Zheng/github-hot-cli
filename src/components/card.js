import React from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroller";
import { Card } from 'antd';
import Loading from '@/components/loading';
import styles from '@/components/card.less';


class Nmsl extends React.Component {
  constructor() {
    super();
    this.state = {
      language: "stars:>1",
      loading: false,
      current: [],
      page: 1,
    };
  }

  componentDidMount() {
    const query = window.location.search;
    if (query) {
      const lan = query.replace('?query=stars:%3E1+language:', '');
      this.setState({ language: lan }, () => this.query());
    }
    else {
      const lan = 'all';
      this.setState({ language: lan });
      this.query();
    }
  }

  query = async () => {
    const { language } = this.state;
    const { page } = this.state;
    const {current} = this.state;
      
    const url = `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories&page=${page}`;

    this.setState({
      loading: true,
    })

    try {
      const res = await axios.get(url);
      this.setState({
        current: [ ...current  , ...res.data.items],
        page: page + 1
      })

    } catch (e) {
    }
    this.setState({ loading: false });
  }

  render() {
    const { loading, current} = this.state;


    const list = current.map((item, key) => (
      <Card key={key} className={styles.content}>
        <h2 style={{ textAlign: "center" }}>#{key + 1}</h2>
        <div className={styles.avatar}>
          <img src={item.owner.avatar_url}
            alt={item.name}
            style={{ width: '50%' }}
          />
        </div>
        <h4 className={styles.title}>{item.full_name}</h4>
        <div>
          <i
            className="fa fa-user"
            style={{ color: "rgb(255, 191, 116)" }}
          />
          <a
            href={item.owner.html_url}
            target="_blank"
            rel="noreferrer"
          >
            {item.name}
          </a>
        </div>
        <div>
          <i
            className="fa fa-star"
            style={{ color: "rgb(255, 215, 0)" }}
          />
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

      <InfiniteScroll
        initialLoad={false}
        loadMore={() => this.query()}
        hasMore={!loading}>
        <div className={styles.card}>
          {list}
        </div>
        {loading&&<Loading />}
      </InfiniteScroll>
    )
  }
}

export default Nmsl;