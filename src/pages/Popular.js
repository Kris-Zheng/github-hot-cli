import React from "react";
import axios from "axios";
import Card from "@/components/Card";
import InfiniteScroll from "react-infinite-scroller";
import Loading from "@/components/Loading";
import styles from "@/pages/popular.less";

class Popular extends React.Component {
  state = {
    lang: '',
    items: [],
    page: 1,
    loading: false,
  };

  componentDidMount() {
    const current = window.location.search.substr(1);
    this.getApi(current);
  }

  onClick = async (query) => {
    window.history.pushState({}, 0, `?${query}`);
    this.setState({ lang: query });
    await this.getApi(query, true);
  };

  getApi = async (lang, clear = false) => {
    const { items, page } = this.state;

    const currentpage = clear ? 1 : page;

    console.log('current page', currentpage);
    console.log('page in state => ', this.state.page)

    const url = `https://api.github.com/search/repositories?q=stars:>1+language:${lang}&sort=stars&order=desc&type=Repositories&page=${currentpage}`;

    this.setState({
      loading: true,
    });

    if (clear) {
      this.setState({ items: [] });
    }

    try {
      const res = await axios.get(url);
      this.setState({
        items: clear ? res.data.items : [...items, ...res.data.items],
        page: currentpage + 1,
      });
    } catch (e) {
      console.log("error", e);
    }

    this.setState({ loading: false });
  }

  render() {
    const current = window.location.search.substr(1);
    const { items, lang } = this.state;
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

    return <>
      <div className={styles.menu}>
        {menu}
      </div>
      <InfiniteScroll
        initialLoad={false}
        loadMore={() => this.getApi(lang, false)}
        hasMore={!loading}
      >
        <Card items={items} />
        {loading && <Loading />}
      </InfiniteScroll>
    </>;
  }
}

export default Popular;
