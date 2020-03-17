import React from "react";
import { Table } from "react-bootstrap";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchBooks } from "../store/books/actions";
import colors from "../helpers/colors";
import DelayedSpinner from "./Spinner";
import TableCell from "./TableCell";

class BooksTable extends React.Component {
  state = {
    textFilter: ""
  };

  componentDidMount() {
    this.props.fetchBooks();
  }

  renderMessage = () => {
    let message = "";

    if (this.props.books.length === 0) message = "No books";
    if (this.props.error)
      message = "Something went wrong. Please try again later.";

    return (
      <tr>
        <td colspan="7">
          <Message>{message}</Message>
        </td>
      </tr>
    );
  };

  render() {
    const { books, error, loading } = this.props;

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
            {!loading && (books.length === 0 || error)
              ? this.renderMessage()
              : books.map((book, index) => (
                  <tr key={index}>
                    <TableCell data-toggle="tooltip" data-placement="top">
                      {book.id}
                    </TableCell>
                    <TableCell>{book.book_title}</TableCell>
                    <TableCell>{book.book_author}</TableCell>
                    <TableCell>{book.book_publication_year}</TableCell>
                    <TableCell>{book.book_publication_city}</TableCell>
                    <TableCell>{book.book_publication_country}</TableCell>
                    <TableCell>{book.book_pages}</TableCell>
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

const Message = styled.div`
  min-height: 150px;
  min-width: 350px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
