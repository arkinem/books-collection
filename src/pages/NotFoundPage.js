import React from "react";
import PageContainer from "../components/PageContainer";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <PageContainer>
      Not found
      <Link to="/books?page=0">
        <Button>Go to books</Button>
      </Link>
    </PageContainer>
  );
};

export default NotFoundPage;
