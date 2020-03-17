import axios from "axios";
import types from "./types";

const serviceBaseUrl = "http://nyx.vima.ekt.gr:3000";

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const fetchBooks = (page = 1, textFilter = "") => {
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
    console.log("fetchBooksBegin");

    const config = {
      method: "POST",
      url: `${serviceBaseUrl}/api/books`,
      data: {
        page: page,
        itemsPerPage: getState().itemsPerPage,
        filters: [{ type: "all", values: [textFilter] }]
      }
    };

    try {
      // await sleep(3000);
      const { data } = await axios(config);
      dispatch(fetchBooksSuccess(data.books, data.count));
      console.log("fetchBooksSuccess");
    } catch (error) {
      console.log(JSON.stringify(error));
      dispatch(fetchBooksFailure(error.response));
      console.log("fetchBooksFailure");
    }
  };
};
