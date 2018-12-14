import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class ShortningUrlBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  update = e => {
    this.props.onUpdate(e.target.value);
    this.setState({ value: e.target.value });
  };
  render() {
    return (
      <div className="col-6 offset-3">
        <form>
          <div className="form-group">
            <br />
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder={this.props.placeholder}
              value={this.state.value}
              onChange={this.update}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default ShortningUrlBox;
