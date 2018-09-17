import React from "react";
import "./index.css";

export class DisplayQuote extends React.Component {
  render() {
    const tweetStyle = {
      color: "white",
    };
    return (
      <div className="jumbotron">
        <h2 className="text-center">Quotes</h2>
        <div className="breakLineTop"></div>
        <p className="text-center">"{this.props.quote}"</p>
        <p className="text-right authorName">- {this.props.author}</p>
        <div className="breakLineBottom"></div>
        <div className="bottomButtons">
          <a onClick={this.props.tweetQuote} href={this.props.tweet} className="twitter-share-button btn tweet" data-size="large" target="_blank"><i className="fab fa-twitter fa-lg" style={tweetStyle}></i></a>
          <button onClick={this.props.loadQuote} className="btn quoteButton">Change Quote</button>
        </div>
      </div>
    );
  }
}
