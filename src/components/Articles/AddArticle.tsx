import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { TextField, Button, Grid } from "@mui/material";
import type { Article } from "./ArticleCard";

export type FormValues = {
  title: string;
  topic: string;
  image: string;
  description: string;
  author: string;
};

const validationSchema = yup.object({
  title: yup.string().required("Title is required"),
  image: yup.string().required("Image URL is required"),
  description: yup.string().required("Description is required"),
  topic: yup.string().required("Topic is required"),
  author: yup.string().required("Author is required"),
});

type AddArticleProps = {
  onAddArticle: (values: FormValues) => void;
  articles: Article[];
};

const AddArticle = ({ onAddArticle, articles }: AddArticleProps) => {
  const initialValues: FormValues = {
    title: "",
    topic: "",
    image: "",
    description: "",
    author: "",
  };

  const submitHandler = (
    values: FormValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    const valuesData = {
      ...values,
      created_at: new Date(),
      article_id: articles.length + 1,
    };
    onAddArticle(valuesData);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={submitHandler}
    >
      {({ errors, touched }) => (
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Field
                name="title"
                as={TextField}
                label="Article Title"
                fullWidth
                variant="outlined"
                helperText={touched.title && errors.title}
                error={touched.title && !!errors.title}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="topic"
                as={TextField}
                label="Topic"
                fullWidth
                variant="outlined"
                helperText={touched.topic && errors.topic}
                error={touched.topic && !!errors.topic}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="image"
                as={TextField}
                label="Article Image URL"
                fullWidth
                variant="outlined"
                helperText={touched.image && errors.image}
                error={touched.image && !!errors.image}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="description"
                as={TextField}
                label="Article Description"
                fullWidth
                multiline
                rows={4}
                variant="outlined"
                helperText={touched.description && errors.description}
                error={touched.description && !!errors.description}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="author"
                as={TextField}
                label="Author"
                fullWidth
                variant="outlined"
                helperText={touched.author && errors.author}
                error={touched.author && !!errors.author}
              />
            </Grid>
          </Grid>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default AddArticle;
