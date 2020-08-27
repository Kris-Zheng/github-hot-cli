/* eslint-disable */
import React from "react";
import { getResult } from "@/utils/index";
import { message, Input, Button, Alert } from "antd";
import styles from "@/pages/battle.less";

class Battle extends React.Component {
  constructor() {
    super();
    this.state = {
      player1: "",
      player2: "",
      showplayer1: false,
      showplayer2: false,
      player1Img: "",
      player2Img: "",
      loadingLeft: false,
      loadingRight: false,
      error: null,
    };
  }

  onBattle = (parm1, parm2) => {
    this.props.history.push(`/result?player1=${parm1}&player2=${parm2}`);
  };

  // 左
  onChangeLeft = (e) => {
    this.setState({ player1: e });
  };

  pressLeft = async (e) => {
    if (e.target.value.length !== 0 && e.keyCode === 13) {
      const { player1 } = this.state;
      this.setState({ loadingLeft: true });
      const result = await getResult(player1).catch((error) => {
        this.setState({ loadingLeft: false, error: error.data.message });
      });
      this.setState({
        player1Img: result.avatar_url,
        showplayer1: true,
        loadingLeft: false,
        error: null,
      });
    }
  };

  handlePostLeft = async () => {
    const { player1 } = this.state;
    this.setState({ loadingLeft: true });
    const result = await getResult(player1).catch((error) => {
      console.log("123", error);
      this.setState({ loadingLeft: false, error: error.data.message });
    });
    this.setState({
      player1Img: result.avatar_url,
      showplayer1: true,
      loadingLeft: false,
      error: null,
    });
  };

  leftcancel = () => {
    this.setState({ showplayer1: false, loadingLeft: false });
  };

  // 右
  onChangeRight = (e) => {
    this.setState({ player2: e });
  };

  pressRight = async (e) => {
    if (e.target.value.length !== 0 && e.keyCode === 13) {
      const { player2 } = this.state;
      this.setState({ loadingRight: true });
      const result = await getResult(player2).catch((error) => {
        this.setState({ loadingRight: false, error: error.data.message });
      });
      this.setState({
        player2Img: result.avatar_url,
        showplayer2: true,
        loadingRight: false,
        error: null,
      });
    }
  };

  handlePostRight = async () => {
    const { player2 } = this.state;
    this.setState({ loadingRight: true });
    const result = await getResult(player2).catch((error) => {
      this.setState({ loadingRight: false, error: error.data.message });
    });
    this.setState({
      layer2Img: result.avatar_url,
      showplayer2: true,
      loadingRight: false,
      error: null,
    });
  };

  rightcancel = () => {
    this.setState({ showplayer2: false, loadingRight: false });
  };

  render() {
    const { showplayer1 } = this.state;
    const { showplayer2 } = this.state;
    const { player1, player1Img } = this.state;
    const { player2, player2Img } = this.state;
    const { loadingLeft, loadingRight } = this.state;
    const { error } = this.state;

    return (
      <main>
        {error && (
          <Alert
            message="Warning"
            description={error}
            type="warning"
            showIcon
            closable
          />
        )}
        <h2 style={{ textAlign: "center" }}>Instructions</h2>
        <div className={styles.content}>
          <div className={styles.tag} style={{ flex: 4 }}>
            <div>Enter two Github:</div>
            <div>
              <i
                className="fa fa-users"
                style={{ color: "rgb(255, 191, 116)" }}
              />
            </div>
          </div>

          <div className={styles.tag} style={{ flex: 2 }}>
            <div>Battle:</div>

            <div>
              <i className="fa fa-fighter-jet" style={{ color: "gray" }} />
            </div>
          </div>

          <div className={styles.tag} style={{ flex: 4 }}>
            <div>See the winner:</div>

            <div>
              <i className="fa fa-trophy fa-3x" style={{ color: "yellow" }} />
            </div>
          </div>
        </div>

        <h3 style={{ textAlign: "center" }}>Players</h3>
        <form>
          <div className={styles.form}>
            {/* player1 */}
            <div className={styles.player1}>
              <h3>Player One</h3>

              <div
                style={showplayer1 ? { display: "none" } : { display: "flex" }}
              >
                <Input
                  className={styles.player1input}
                  type="text"
                  placeholder="github username"
                  onChange={(e) => {
                    this.onChangeLeft(e.target.value);
                  }}
                  onKeyUp={this.pressLeft}
                />
                <Button
                  type="primary"
                  disabled={player1 === ""}
                  onClick={this.handlePostLeft}
                  loading={loadingLeft}
                >
                  Submit
                </Button>
              </div>

              {/* 变更样式 */}
              <div
                style={showplayer1 ? { display: "block" } : { display: "none" }}
              >
                <div
                  style={{
                    display: "flex",
                    padding: 16,
                    borderRadius: 4,
                    backgroundColor: "#dfdfdf",
                  }}
                >
                  <div
                    style={{ display: "flex", flex: 1, alignItems: "center" }}
                  >
                    <img alt="player1" src={player1Img} width="128" />
                    <span style={{ fontSize: 32, color: "#1890ff" }}>
                      {player1}
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <span
                      role="button"
                      tabIndex={0}
                      aria-label="cancel"
                      className="fa-stack"
                      onClick={this.leftcancel}
                      onKeyUp={this.leftcancel}
                    >
                      <i className="fa fa-circle fa-stack-2x text-danger" />
                      <i className="fa fa-close fa-stack-1x fa-inverse" />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* player2 */}
            <div className={styles.player2}>
              <h3>Player Two</h3>

              <div
                style={showplayer2 ? { display: "none" } : { display: "flex" }}
              >
                <Input
                  className={styles.player2input}
                  type="text"
                  placeholder="github username"
                  onChange={(e) => {
                    this.onChangeRight(e.target.value);
                  }}
                  onKeyUp={this.pressRight}
                />
                <Button
                  type="primary"
                  disabled={player2 === ""}
                  onClick={this.handlePostRight}
                  loading={loadingRight}
                >
                  Submit
                </Button>
              </div>

              {/* 变更样式 */}
              <div
                style={showplayer2 ? { display: "block" } : { display: "none" }}
              >
                <div
                  style={{
                    display: "flex",
                    padding: 16,
                    borderRadius: 4,
                    backgroundColor: "#dfdfdf",
                  }}
                >
                  <div
                    style={{ display: "flex", flex: 1, alignItems: "center" }}
                  >
                    <img alt="player2" src={player2Img} width="128" />
                    <span style={{ fontSize: 32, color: "#1890ff" }}>
                      {player2}
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <span
                      role="button"
                      tabIndex={0}
                      aria-label="cancel"
                      className="fa-stack"
                      onClick={this.rightcancel}
                      onKeyUp={this.rightcancel}
                    >
                      <i className="fa fa-circle fa-stack-2x text-danger" />
                      <i className="fa fa-close fa-stack-1x fa-inverse" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={styles.submit}
            style={
              showplayer1 && showplayer2
                ? { display: "block" }
                : { display: "none" }
            }
          >
            <input
              type="button"
              onClick={() => this.onBattle(player1, player2)}
              value="battle"
            />
          </div>
        </form>
      </main>
    );
  }
}

export default Battle;
