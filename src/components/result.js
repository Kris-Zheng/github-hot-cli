/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";
import { getResult } from "@/utils/index";
import styles from "@/components/Result.less";
import { parse } from "qs";
import Loading from "@/components/Loading";
import LazyImg from "@/components/LazyImg";

class Result extends React.Component {
  constructor() {
    super();
    this.state = {
      player1value: {},
      player2value: {},
      loading: true,
    };
  }

  async componentDidMount() {
    const { location } = this.props;
    const { player1, player2 } = parse(location.search.substring(1));
    const data1 = await getResult(player1);
    const data2 = await getResult(player2);
    this.setState({ player1value: data1, player2value: data2, loading: false });
  }

  render() {
    const { player1value, player2value, loading } = this.state;

    return (
      <main>
        {loading === true ? (
          <Loading />
        ) : (
          <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className={styles.cardleft}>
                <div
                  style={{
                    display:
                      player1value.public_repos >= 0 &&
                      player1value.public_repos !== player2value.public_repos
                        ? "block"
                        : "none",
                  }}
                >
                  {player1value.public_repos > player2value.public_repos ? (
                    <h2 style={{ textAlign: "center" }}>Winner</h2>
                  ) : (
                    <h2 style={{ textAlign: "center" }}>Loser</h2>
                  )}
                </div>
                <div>
                  <LazyImg
                    alt="avatar"
                    src={`${player1value.avatar_url}`}
                    width="200"
                    height="200"
                  />
                </div>
                <div style={{ textAlign: "center" }}>
                  <h3>Scores:{player1value.public_repos}</h3>
                </div>
                <div>
                  <i className="fa fa-location-arrow">
                    {player1value.location}
                  </i>
                </div>
                <div>
                  <i className="fa fa-group">{player1value.followers}</i>
                </div>
                <div>
                  <i className="fa fa-user-plus">{player1value.following}</i>
                </div>
                <div>
                  <i className="fa fa-code">{player1value.public_repos}</i>
                </div>
              </div>

              <div className={styles.cardright}>
                <div
                  style={{
                    display:
                      player2value.public_repos >= 0 &&
                      player2value.public_repos !== player1value.public_repos
                        ? "block"
                        : "none",
                  }}
                >
                  {player2value.public_repos > player1value.public_repos ? (
                    <h2 style={{ textAlign: "center" }}>Winner</h2>
                  ) : (
                    <h2 style={{ textAlign: "center" }}>Loser</h2>
                  )}
                </div>
                <div>
                  <LazyImg
                    alt="avatar"
                    src={`${player2value.avatar_url}`}
                    width="200"
                    height="200"
                  />
                </div>
                <div style={{ textAlign: "center" }}>
                  <h3>Scores:{player2value.public_repos}</h3>
                </div>
                <div>
                  <i className="fa fa-location-arrow">
                    {player2value.location}
                  </i>
                </div>
                <div>
                  <i className="fa fa-group">{player2value.followers}</i>
                </div>
                <div>
                  <i className="fa fa-user-plus">{player2value.following}</i>
                </div>
                <div>
                  <i className="fa fa-code">{player2value.public_repos}</i>
                </div>
              </div>
            </div>

            <div className={styles.reset}>
              <button>
                <Link
                  to={{ pathname: "/battle" }}
                  style={{ textDecoration: "none", color: "rgba(0,0,0,0.65)" }}
                >
                  RESET
                </Link>
              </button>
            </div>
          </div>
        )}
      </main>
    );
  }
}

export default Result;
