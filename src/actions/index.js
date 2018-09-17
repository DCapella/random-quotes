import axios from "axios";

export function loadQuote() {
  return dispatch => {
    return axios.get("https://talaikis.com/api/quotes/random/").then(response => {
      dispatch(changeQuote(response.data.quote, response.data.author));
    })
  }
}

export function changeQuote(quote, author) {
  return {
    type: "GET_QUOTE",
    quote: quote,
    author: author,
  }
}

export function tweetQuote() {
  return {
    type: "TWEET_QUOTE",
  }
}
