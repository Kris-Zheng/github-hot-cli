import React from "react";

const styles = {
  center: {
    textAlign: "center"
  }
};

class Loading extends React.Component {
  render() {
    return (
      <div style={styles.center}>
        <i className="fa fa-spinner fa-spin"></i>
        <span>Loading...</span>
      </div>
    );
  }
}

export default Loading;