import { useEffect, useState } from "react";
import { fetchArticles } from "../../utils.js";
import Typography from "@mui/material/Typography";
import AddArticle from "./AddArticle";
import ArticleList from "./ArticleList.js";
import FilterBar from "./FilterBar.js";
import { fetchTopics } from "../../utils";

const Articles = ({ search }) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currTopics, setCurrTopics] = useState([]);
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [selectedAuthors, setSelectedAuthors] = useState([]);

  useEffect(() => {
    fetchArticles()
      .then((articles) => {
        setArticles(articles);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchTopics().then((topics) => {
      const slugs = topics.map((topic) => topic.slug);
      setCurrTopics(slugs);
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

  const selectedArticles =
    selectedTopics.length > 0
      ? articles.filter((item) => selectedTopics.includes(item.topic))
      : articles;

  return (
    <>
      <FilterBar
        currTopics={currTopics}
        selectedTopics={selectedTopics}
        selectedAuthors={selectedAuthors}
        setSelectedTopics={setSelectedTopics}
        setSelectedAuthors={setSelectedAuthors}
      />
      <AddArticle onAddArticle={onAddArticleHandler} articles={articles} />
      <ArticleList articles={selectedArticles} search={search} />
    </>
  );
};

export default Articles;
