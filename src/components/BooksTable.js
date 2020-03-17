import React from "react";
import { Table, Spinner } from "react-bootstrap";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchBooks } from "../store/books/actions";

class BooksTable extends React.Component {
  state = {
    textFilter: ""
  };

  componentDidMount() {
    this.props.fetchBooks();
  }

  renderLoading = () => (
    <Container>
      <Spinner animation="border" role="status" variant="primary">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </Container>
  );

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

  renderData = () => {
    const { books } = this.props;
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
      </Container>
    );
  };

  render() {
    const { books, error, loading } = this.props;

    if (loading) return this.renderLoading();
    if (error || books.length === 0) return this.renderMessage();

    return this.renderData();
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
  min-height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
