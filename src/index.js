import React from "react";
import { render } from "react-dom";
import './index.css';

class DisplayQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: 'Avoid popularity if you would have peace.',
      author: 'Abraham Lincoln',
      tweet: '',
    }

    this.handleGetQuote = this.handleGetQuote.bind(this);
    this.handleTweet = this.handleTweet.bind(this);
  }

  handleGetQuote() {
    fetch('https://talaikis.com/api/quotes/random/')
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({
        quote: data.quote,
        author: data.author,
      })
    })
  }

  handleTweet() {
    const hrefQuote = "https://twitter.com/intent/tweet/?text=" +
      this.state.quote +
      " - " +
      this.state.author;
    this.setState({
      tweet: hrefQuote,
    })
  }

  render() {
    const tweetStyle = {
      color: "white",
    };
    return (
      <div className="jumbotron">
        <h2 className="text-center">Quotes</h2>
        <div className="breakLineTop"></div>
        <p className="text-center">"{this.state.quote}"</p>
        <p className="text-right authorName">- {this.state.author}</p>
        <div className="breakLineBottom"></div>
        <div className="bottomButtons">
          <a onClick={this.handleTweet} href={this.state.tweet} className="twitter-share-button btn tweet" data-size="large" target="_blank"><i className="fab fa-twitter fa-lg" style={tweetStyle}></i></a>
          <button onClick={this.handleGetQuote} className="btn quoteButton">Change Quote</button>
        </div>
      </div>
    );
  }
}

render(
  <DisplayQuote />,
  document.getElementById("root")
);
