import React, { Component } from "react";
import "./App.css";
import UrlShortner from "./Components/UrlShortnerTitle";
import ShortningUrlBox from "./Components/ShortningUrlBox";
import ShortenerBtn from "./Components/ShortenerBtn";
import ShortUrl from "./Components/ShortUrl";
import { URL } from "./config.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      shortUrl: ""
    };
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler() {
    fetch(URL + this.state.value)
      .then(response => response.json())
      .then(response => {
        this.setState({
          shortUrl: response.data.url
        });
      });
  }
  onUpdate = value => {
    this.setState({ value: value });
  };
  render() {
    return (
      <div className="App">
        <UrlShortner />
        <ShortningUrlBox placeholder={"Enter Url"} onUpdate={this.onUpdate} />
        <ShortenerBtn handler={this.clickHandler} btnName={"Shorten It!!"} />
        <ShortUrl shortUrl={this.state.shortUrl} />
      </div>
    );
  }
}

export default App;
