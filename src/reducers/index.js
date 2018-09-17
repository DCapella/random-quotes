const defaultState = {
  quote: "Avoid popularity if you would have peace.",
  author: "Abraham Lincoln",
  tweet: "https://twitter.com/intent/tweet/",
}

const mainReducer = (state=defaultState, action) => {
  switch (action.type) {
    case "GET_QUOTE":
      return {...state, quote: action.quote, author: action.author};
    case "TWEET_QUOTE":
      const hrefTweet = state.tweet +
        "?text=" +
        state.quote +
        " - " +
        state.author;
      return {...state, tweet: hrefTweet};
    default:
      return {...state};
  }
}

export default mainReducer;
