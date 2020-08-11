/* eslint-disable */
import React from "react";
import Card from "@/components/Card";
import InfiniteScroll from "react-infinite-scroller";
import Loading from "@/components/Loading";
import { request } from "@/utils/index";
import styles from "@/pages/popular.less";
import { withRouter } from "react-router-dom";

class Popular extends React.Component {
  state = {
    lang: "",
    items: [],
    page: 1,
    loading: false,
    current: "",
  };

  componentDidMount() {
    const { location: search } = this.props;
    const current = search.search.substr(1);
    this.setState({ current });
    this.getApi(current);
  }

  onClick = async (query) => {
    const { history } = this.props;
    history.push({ pathname: "/", search: query });
    this.setState({ lang: query, current: query });
    await this.getApi(query, true);
  };

  getApi = async (lang, clear = false) => {
    const { items, page } = this.state;

    const currentpage = clear ? 1 : page;

    console.log("current page", currentpage);
    console.log("page in state => ", this.state.page);

    const url = `https://api.github.com/search/repositories?q=stars:>1+language:${lang}&sort=stars&order=desc&type=Repositories&page=${currentpage}`;

    this.setState({
      loading: true,
    });

    if (clear) {
      this.setState({ items: [] });
    }

    const res = await request(url);

    this.setState({
      items: clear ? res.items : [...items, ...res.items],
      page: currentpage + 1,
    });

    this.setState({ loading: false });
  };

  render() {
    const { items, lang, current } = this.state;
    const { loading } = this.state;

    const links = [
      {
        title: "All",
        query: "all",
      },
      {
        title: "JavaScript",
        query: "javascript",
      },
      {
        title: "Ruby",
        query: "ruby",
      },
      {
        title: "Java",
        query: "java",
      },
      {
        title: "CSS",
        query: "css",
      },
    ];

    const menu = links.map((item) => (
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

    return (
      <>
        <div className={styles.menu}>{menu}</div>
        <InfiniteScroll
          initialLoad={false}
          loadMore={() => this.getApi(lang, false)}
          hasMore={!loading}
        >
          <Card items={items} />
          {loading && <Loading />}
        </InfiniteScroll>
      </>
    );
  }
}

export default withRouter(Popular);
