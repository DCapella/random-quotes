import React from "react";
import "./index.css";

export class DisplayQuote extends React.Component {
  render() {
    const tweetStyle = {
      color: "white",
    };
    return (
      <div className="jumbotron" id="quote-box">
        <h2 className="text-center">Quotes</h2>
        <div className="breakLineTop"></div>
        <p className="text-center" id="text">"{this.props.quote}"</p>
        <p className="text-right authorName" id="author">- {this.props.author}</p>
        <div className="breakLineBottom"></div>
        <div className="bottomButtons">
          <a onClick={this.props.tweetQuote} href={this.props.tweet} className="twitter-share-button btn tweet" data-size="large" target="_blank" id="tweet-quote"><i className="fab fa-twitter fa-lg" style={tweetStyle}></i></a>
          <button onClick={this.props.loadQuote} className="btn quoteButton" id="new-quote">Change Quote</button>
        </div>
      </div>
    );
  }
}
