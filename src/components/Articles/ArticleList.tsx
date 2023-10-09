import { useState } from "react";
import ArticleCard from "./ArticleCard";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import type { Article } from "./ArticleCard";

type ArticleListProps = {
  articles: Article[];
  search: string;
};

const ArticleList = ({ articles, search }: ArticleListProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  const filteredArticles = articles.filter((item) => {
    return !search || item.title.toLowerCase().includes(search.toLowerCase());
  });

  const articlesCurrentPage = filteredArticles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  return (
    <Box sx={{ flexGrow: 1, margin: "20px" }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 12 }}
      >
        {articlesCurrentPage.length > 0 ? (
          articlesCurrentPage.map((article, idx) => (
            <Grid item xs={2} sm={4} md={4} key={idx}>
              <ArticleCard key={article.article_id} article={article} />
            </Grid>
          ))
        ) : (
          <>
            <SentimentDissatisfiedIcon />
            <Typography variant="h6" noWrap component="div">
              Nothing found
            </Typography>
          </>
        )}
      </Grid>
      {filteredArticles.length > articlesPerPage && (
        <Stack spacing={2} sx={{ margin: "10px auto" }}>
          <Pagination
            count={Math.floor(filteredArticles.length / articlesPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            size="large"
            color="primary"
          />
        </Stack>
      )}
    </Box>
  );
};

export default ArticleList;
