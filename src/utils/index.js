import request from "./request";

export const getData = (language, page) => {
  const url = `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories&page=${page}`;
  return request(url);
};

export const getResult = (name) => {
  const url = `https://api.github.com/users/${name}`;
  return request(url);
};
