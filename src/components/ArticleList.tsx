import ArticleCard from "./ArticleCard";
import Grid from "@mui/material/Grid";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const ArticleList = ({ articles }) => {
  return (
    <Box sx={{ flexGrow: 1, margin: "20px" }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 12 }}
      >
        {articles.map((article, idx) => (
          <Grid item xs={2} sm={4} md={4} key={idx}>
            <ArticleCard key={article.article_id} article={article} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ArticleList;
