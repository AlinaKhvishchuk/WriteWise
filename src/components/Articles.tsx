import { useEffect, useState } from "react";
import { fetchArticles } from "../../utils.js";
import Typography from "@mui/material/Typography";
import AddArticle from "./AddArticle";
import ArticleList from "./ArticleList.js";
import FilterBar from "./FilterBar.js";
import { fetchTopics } from "../../utils";
import SortBar from "./SortBar.js";
import type { Article } from "./ArticleCard";
import type { FormValues } from "./AddArticle";

type ArticlesProps = {
  search: string;
};

type Topic = {
  slug: string;
};

const Articles = ({ search }: ArticlesProps) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currTopics, setCurrTopics] = useState([]);
  const [selectedTopics, setSelectedTopics] = useState([]);
  // const [selectedAuthors, setSelectedAuthors] = useState([]);
  // const [sortedById, setSortedById] = useState([]);
  const [selectedSortingValue, setSelectedSortingValue] = useState("");

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
      const slugs = topics.map((topic: Topic) => topic.slug);
      setCurrTopics(slugs);
    });
  }, []);

  const onAddArticleHandler = (newArticle: FormValues) => {
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

  const sortedArticles = selectedArticles.sort((a, b) => {
    if (selectedSortingValue === "date") {
      return Number(new Date(b.created_at)) - Number(new Date(a.created_at));
    } else if (selectedSortingValue === "id") {
      return b.article_id - a.article_id;
    } else if (selectedSortingValue === "title") {
      return a.title.localeCompare(b.title);
    }
  });

  return (
    <>
      <FilterBar
        currTopics={currTopics}
        selectedTopics={selectedTopics}
        setSelectedTopics={setSelectedTopics}
      />
      <SortBar
        selectedSortingValue={selectedSortingValue}
        setSelectedSortingValue={setSelectedSortingValue}
      />
      <AddArticle onAddArticle={onAddArticleHandler} articles={articles} />
      <ArticleList articles={sortedArticles} search={search} />
    </>
  );
};

export default Articles;
