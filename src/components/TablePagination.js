import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchBooks } from "../store/books/actions";
import ReactPaginate from "react-paginate";
import colors from "../helpers/colors";

class TablePagination extends React.Component {
  state = {
    textFilter: ""
  };

  handlePageClick = ({ selected }) => {
    const pageIndex = selected + 1;
    this.props.fetchBooks(pageIndex);
  };

  render() {
    const { count, itemsPerPage } = this.props;

    if (count === 0) return null;
    return (
      <Container>
        <ReactPaginate
          pageCount={count / itemsPerPage}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          containerClassName={"pagination"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      </Container>
    );
  }
}

const mapStateToProps = ({ books, loading, count, itemsPerPage }) => ({
  books,
  loading,
  count,
  itemsPerPage
});

const mapDispatchToProps = dispatch => ({
  fetchBooks: page => dispatch(fetchBooks(page))
});

export default connect(mapStateToProps, mapDispatchToProps)(TablePagination);

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;
