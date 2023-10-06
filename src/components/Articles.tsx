import { useEffect, useState } from "react";
import { fetchArticles } from "../../utils.js";
import Typography from "@mui/material/Typography";
import AddArticle from "./AddArticle";
import ArticleList from "./ArticleList.js";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticles()
      .then((articles) => {
        setArticles(articles);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const onAddArticleHandler = (newArticle) => {
    setArticles((prevArticles) => {
      return [newArticle, ...articles];
    });
  };
  if (!articles.length) return null;

  if (isLoading) {
    return (
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
      >
        Loading...
      </Typography>
    );
  }

  return (
    <>
      <AddArticle onAddArticle={onAddArticleHandler} articles={articles} />
      <ArticleList articles={articles} />
    </>
  );
};

export default Articles;
