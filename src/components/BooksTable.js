import React from "react";
import { Table } from "react-bootstrap";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchBooks } from "../store/books/actions";
import colors from "../helpers/colors";
import DelayedSpinner from "./Spinner";

class BooksTable extends React.Component {
  state = {
    textFilter: ""
  };

  componentDidMount() {
    this.props.fetchBooks();
  }

  renderLoading = () => <Container></Container>;

  renderMessage = () => {
    let message = "";

    if (this.props.books.length === 0) message = "No books";
    if (this.props.error)
      message = "Something went wrong. Please try again later.";

    return (
      <Container>
        <p>{message}</p>
      </Container>
    );
  };

  render() {
    const { books, error, loading } = this.props;

    if (error || books.length === 0) return this.renderMessage();

    return (
      <Container>
        <Table striped bordered responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Publication Year</th>
              <th>Publication City</th>
              <th>Publication Country</th>
              <th>Pages</th>
            </tr>
          </thead>
          <tbody>
            {this.props.books.map(book => (
              <tr>
                <td>{book.id}</td>
                <td>{book.book_title}</td>
                <td>{book.book_author}</td>
                <td>{book.book_publication_year}</td>
                <td>{book.book_publication_city}</td>
                <td>{book.book_publication_country}</td>
                <td>{book.book_pages}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        {loading && (
          <LoadingContainer>
            <DelayedSpinner />
          </LoadingContainer>
        )}
      </Container>
    );
  }
}

const mapStateToProps = ({ books, loading, error }) => ({
  books,
  loading,
  error
});

const mapDispatchToProps = dispatch => ({
  fetchBooks: () => dispatch(fetchBooks())
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksTable);

const Container = styled.div`
  position: relative;
  min-height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoadingContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
`;
