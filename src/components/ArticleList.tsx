import ArticleCard from "./ArticleCard";
import Grid from "@mui/material/Grid";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Icon } from "@mui/material";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";

const ArticleList = ({ articles, search }) => {
  const filteredArticles = articles.filter((item) => {
    return (
      search.toLowerCase() === "" ||
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  });
  return (
    <Box sx={{ flexGrow: 1, margin: "20px" }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 12 }}
      >
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article, idx) => (
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
    </Box>
  );
};

export default ArticleList;
