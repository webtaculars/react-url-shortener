import React, { Component } from "react";

class ShortUrl extends Component {
  render() {
    return (
      <div>
        <a href={this.props.shortUrl}>{this.props.shortUrl}</a>
      </div>
    );
  }
}

export default ShortUrl;
