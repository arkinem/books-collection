import React from "react";
import { Button, Form } from "react-bootstrap";
import styled from "styled-components";

class SearchBox extends React.Component {
  state = {
    textFilter: ""
  };

  render() {
    return (
      <Container>
        <Form.Control
          type="text"
          placeholder="Search"
          value={this.state.textFilter}
          onChange={e => this.setState({ textFilter: e.target.value })}
        />

        <SearchButton variant="primary">Search</SearchButton>
      </Container>
    );
  }
}

export default SearchBox;

const Container = styled(Form)`
  /* min-width: 300px; */
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
`;

const SearchButton = styled(Button)`
  margin-left: 20px;
`;
