/* eslint-disable */
import React from "react";
import Card from "@/components/Card";
import InfiniteScroll from "react-infinite-scroller";
import Loading from "@/components/Loading";
import { getData } from "@/utils/index";
import styles from "@/pages/popular.less";
import { withRouter } from "react-router-dom";
import { message } from "antd";

class Popular extends React.Component {
  state = {
    lang: "",
    items: [],
    page: 1,
    loading: false,
    current: "",
  };

  async componentDidMount() {
    const { location: search } = this.props;

    const query = search.search.substr(1);
    this.setState({ current: query });

    const current = search.search.replace("?language=", "");

    await this.getApi(current);
  }

  onClick = async (query) => {
    const { history } = this.props;
    history.push({ pathname: "/", search: query });
    this.setState({ lang: query, current: query });
    await this.getApi(query, true);
  };

  getApi = async (lang, clear = false) => {
    const { items, page } = this.state;
    const language = lang.replace("language=", "");
    const currentpage = clear ? 1 : page;

    // console.log("current page", currentpage);
    // console.log("page in state => ", this.state.page);

    this.setState({
      loading: true,
    });

    if (clear) {
      this.setState({ items: [] });
    }

    const res = await getData(language, currentpage).catch((error) => {
      console.log(error);
      message.info("请求出错");
      this.setState({ loading: false, items: items });
    });

    this.setState({
      items: clear ? res.items : [...items, ...res.items],
      page: currentpage + 1,
      loading: false,
    });
  };

  render() {
    const { items, lang, current } = this.state;
    const { loading } = this.state;

    const links = [
      {
        title: "All",
        query: "language=all",
      },
      {
        title: "JavaScript",
        query: "language=javascript",
      },
      {
        title: "Ruby",
        query: "language=ruby",
      },
      {
        title: "Java",
        query: "language=java",
      },
      {
        title: "CSS",
        query: "language=css",
      },
    ];

    const menu = links.map((item) => (
      <li key={item.title}>
        <a
          role="link"
          onClick={() => this.onClick(item.query)}
          style={
            current === item.query ? { color: "#1890ff" } : { color: "black" }
          }
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
