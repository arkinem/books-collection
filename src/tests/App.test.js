import React from "react";
import { render } from "@testing-library/react";
import BooksPage from "../pages/BooksPage";

test("renders learn react link", () => {
  const { getByText } = render(<BooksPage />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
