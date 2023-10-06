import axios from "axios";

const API = axios.create({
  baseURL: "https://nc-news-00jh.onrender.com/api",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export const fetchArticles = () => {
  return API.get(`/articles`).then(({ data }) => {
    return data.articles;
  });
};

export const fetchTopics = () => {
  return API.get(`/topics`).then(({ data }) => {
    return data.topics;
  });
};
