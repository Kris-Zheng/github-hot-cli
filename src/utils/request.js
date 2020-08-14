import axios from "axios";

// const request = (url) => {
//   return new Promise((resolve,reject) => {
//     const promise = axios.get(url);
//     promise.then((response) => {
//       resolve(response.data);
//     });
//     promise.catch((error) => {
//       reject(error)
//     });
//   });
// };

const instance = axios.create();

instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    throw error.response;
  }
);

export default instance;
