import { connect } from "react-redux";
import * as actionCreators from "../actions/index.js";
import { DisplayQuote } from "../components/index.js";

const mapStateToProps = state => {
  return state;
}

export const Container = connect(mapStateToProps, actionCreators)(DisplayQuote);
