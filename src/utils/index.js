import fetchData from "./request";

export const request = (url) => {
  return fetchData(url);
};

export default request;
