import queryString from "query-string";

export const updateQueryInUrl = (params, history) => {
  const { location } = history;

  const currentQuery = queryString.parse(location.search);
  const updatedQuery = { ...currentQuery, ...params };

  return `${location.pathname}?${queryString.stringify(updatedQuery)}`;
};
