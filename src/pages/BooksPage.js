import React from "react";
import PageContainer from "../components/PageContainer";
import SearchBox from "../components/SearchBox";
import BooksTable from "../components/BooksTable";
import TablePagination from "../components/TablePagination";

class BooksPage extends React.Component {
  state = {
    textFilter: ""
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

export default BooksPage;
