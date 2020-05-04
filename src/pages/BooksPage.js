import React from "react";
import PageContainer from "../components/PageContainer";
import SearchBox from "../components/SearchBox";
import BooksTable from "../components/BooksTable";
import TablePagination from "../components/TablePagination";
import { fetchBooks } from "../store/books/actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class BooksPage extends React.Component {
  componentDidUpdate = prevProps => {
    const { currentPage, textFilter, fetchBooks } = this.props;

    if (prevProps.currentPage !== currentPage) fetchBooks();
    if (prevProps.textFilter !== textFilter) fetchBooks();
  };

  render() {
    return (
      <PageContainer>
        <SearchBox />
        <BooksTable />
        <TablePagination />
      </PageContainer>
    );
  }
}

const mapStateToProps = ({ currentPage, textFilter }) => ({
  currentPage,
  textFilter
});

const mapDispatchToProps = dispatch => ({
  fetchBooks: page => dispatch(fetchBooks(page))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BooksPage)
);
