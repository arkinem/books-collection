import React from "react";
import { Spinner } from "react-bootstrap";

export default class DelayedSpinner extends React.Component {
  state = {
    showSpinner: false
  };

  componentDidMount() {
    this.timer = setTimeout(
      () => this.setState({ showSpinner: true }),
      this.props.delay || 400
    );
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    return (
      this.state.showSpinner && (
        <Spinner animation="border" role="status" variant="primary" />
      )
    );
  }
}
