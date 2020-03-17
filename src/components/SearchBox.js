import React from "react";
import { connect } from "react-redux";
import { Button, Form } from "react-bootstrap";
import styled from "styled-components";
import queryString from "query-string";
import { setTextFilter } from "../store/books/actions";
import { withRouter } from "react-router-dom";
import { updateQueryInUrl } from "../helpers/url";

class SearchBox extends React.Component {
  state = {
    text: this.props.textFilter
  };

  componentDidUpdate = prevProps => {
    if (prevProps.textFilter !== this.props.textFilter)
      this.setState({ text: this.props.textFilter });

    if (prevProps.location.search !== this.props.location.search) {
      const { filter } = queryString.parse(window.location.search);
      this.props.setTextFilter(filter || "");
    }
  };

  handleSearch = () => {
    const { history, setTextFilter } = this.props;
    const { text } = this.state;

    const url = updateQueryInUrl(
      { filter: text || undefined, page: 1 },
      history
    );

    history.push(url);
    setTextFilter(text);
  };

  render() {
    return (
      <Container onSubmit={e => e.preventDefault()}>
        <Form.Control
          type="text"
          placeholder="Search"
          value={this.state.text}
          onChange={e => this.setState({ text: e.target.value })}
        />

        <SearchButton variant="primary" onClick={this.handleSearch}>
          Search
        </SearchButton>
      </Container>
    );
  }
}

const mapStateToProps = ({ textFilter }) => ({
  textFilter
});

const mapDispatchToProps = dispatch => ({
  setTextFilter: text => dispatch(setTextFilter(text))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SearchBox)
);

const Container = styled(Form)`
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
`;

const SearchButton = styled(Button)`
  margin-left: 20px;
`;
