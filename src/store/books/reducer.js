import types from "./types";

const initialState = {
  books: [],
  count: 0,
  itemsPerPage: 6,
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
    default:
      return state;
  }
};

export default booksReducer;
