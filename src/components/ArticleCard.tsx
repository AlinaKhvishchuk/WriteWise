import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { format } from "date-fns";

export type Article = {
  article_id: number;
  title: string;
  topic: string;
  created_at: string;
  article_img_url: string;
  author: string;
};

const ArticleCard = ({ article }: { article: Article }) => {
  const { article_id, title, topic, created_at, article_img_url, author } =
    article;
  let formattedDate = created_at
    ? format(new Date(created_at), "MM/dd/yyyy")
    : "Invalid Date";

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={article_img_url}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {topic}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            article ID: {article_id}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {formattedDate}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            By {author}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ArticleCard;
