import axios from "axios";
import types from "./types";

const httpsProxy = "https://cors-anywhere.herokuapp.com";
const serviceBaseUrl = "http://nyx.vima.ekt.gr:3000";

export const fetchBooks = () => {
  const fetchBooksBegin = () => ({
    type: types.FETCH_BOOKS_BEGIN
  });

  const fetchBooksSuccess = (books, count) => ({
    type: types.FETCH_BOOKS_SUCCESS,
    payload: { books, count }
  });

  const fetchBooksFailure = error => ({
    type: types.FETCH_BOOKS_FAILURE,
    payload: { error }
  });

  return async (dispatch, getState) => {
    dispatch(fetchBooksBegin());

    const config = {
      method: "POST",
      // url: `${httpsProxy}/${serviceBaseUrl}/api/books`,
      url: `${serviceBaseUrl}/api/books`,
      data: {
        page: getState().currentPage,
        itemsPerPage: getState().itemsPerPage,
        filters: [{ type: "all", values: [getState().textFilter] }]
      }
    };

    try {
      const { data } = await axios(config);
      dispatch(fetchBooksSuccess(data.books, data.count));
    } catch (error) {
      console.log(JSON.stringify(error));
      dispatch(fetchBooksFailure(error.response));
    }
  };
};

export const setTextFilter = text => ({
  type: types.SET_TEXT_FILTER,
  payload: { text }
});

export const setCurrentPage = page => ({
  type: types.SET_CURRENT_PAGE,
  payload: { page }
});
