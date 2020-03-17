import React from "react";
import PageContainer from "../components/PageContainer";
import SearchBox from "../components/SearchBox";
import BooksTable from "../components/BooksTable";

class BooksPage extends React.Component {
  state = {
    textFilter: ""
  };

  render() {
    return (
      <PageContainer>
        <SearchBox />
        <BooksTable />
      </PageContainer>
    );
  }
}

export default BooksPage;
