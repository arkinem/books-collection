import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Pagination from "react-js-pagination";
import { withRouter } from "react-router-dom";
import { setCurrentPage } from "../store/books/actions";
import { updateQueryInUrl } from "../helpers/url";

class TablePagination extends React.Component {
  state = {
    windowWidth: 0
  };

  componentDidMount = () => {
    this.updateWindowWidth();
    window.addEventListener("resize", this.updateWindowWidth);
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateWindowWidth);
  };

  updateWindowWidth = () => {
    this.setState({ windowWidth: window.innerWidth });
  };

  handlePageChange = pageIndex => {
    const { history, setCurrentPage } = this.props;

    const url = updateQueryInUrl({ page: pageIndex }, history);

    history.push(url);
    setCurrentPage(pageIndex);
  };

  render() {
    const { count, itemsPerPage, currentPage } = this.props;
    const { windowWidth } = this.state;

    if (count === 0) return null;

    return (
      <Container>
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={itemsPerPage}
          totalItemsCount={count}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
          itemClass="page-item"
          linkClass="page-link"
        />
      </Container>
    );
  }
}

const mapStateToProps = ({ count, itemsPerPage, currentPage }) => ({
  count,
  itemsPerPage,
  currentPage
});

const mapDispatchToProps = dispatch => ({
  setCurrentPage: page => dispatch(setCurrentPage(page))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TablePagination)
);

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;
