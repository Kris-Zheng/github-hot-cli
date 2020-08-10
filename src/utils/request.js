import axios from "axios";

const fetchData = (url) => {
  return new Promise((resolve) => {
    const promise = axios.get(url);

    promise.then((response) => {
      resolve(response.data);
    });
    promise.catch((error) => {
      console.log("error", error);
      alert("API请求发生错误", error);
    });
  });
};

export default fetchData;
