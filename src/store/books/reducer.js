import queryString from "query-string";
import types from "./types";

const { page, filter } = queryString.parse(window.location.search);

const initialState = {
  books: [],
  count: 0,
  itemsPerPage: 6,
  currentPage: parseInt(page) || 1,
  textFilter: filter || "",
  loading: false,
  error: null
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_BOOKS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case types.FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        books: action.payload.books,
        count: action.payload.count,
        loading: false,
        error: false
      };
    case types.FETCH_BOOKS_FAILURE:
      return {
        ...state,
        count: 0,
        loading: false,
        error: action.payload.error
      };
    case types.SET_TEXT_FILTER:
      return {
        ...state,
        textFilter: action.payload.text
      };
    case types.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload.page
      };
    default:
      return state;
  }
};

export default booksReducer;
