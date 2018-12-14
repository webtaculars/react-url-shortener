import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class ShortenerBtn extends Component {
  render() {
    return (
      <div className="col-6 offset-3">
        <button
          type="submit"
          onClick={this.props.handler}
          className="btn btn-primary"
        >
          {this.props.btnName}
        </button>
      </div>
    );
  }
}

export default ShortenerBtn;
