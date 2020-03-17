import axios from "axios";

const serviceBaseUrl = "http://nyx.vima.ekt.gr:3000";

export const fetchBooks = async (page = 1, limit = 20) => {
  const config = {
    method: "POST",
    url: `${serviceBaseUrl}/api/books`,
    data: {
      page: 1,
      itemsPerPage: 20,
      filters: []
    }
  };

  try {
    const { data } = await axios(config);
    return data;
  } catch (error) {
    console.log(JSON.stringify(error));
    return;
  }
};
