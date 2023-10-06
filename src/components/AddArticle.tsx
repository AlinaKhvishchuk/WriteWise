import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { TextField, Button, Grid } from "@mui/material";

interface FormValues {
  title: string;
  topic: string; // Add the "topic" field
  image: string;
  description: string;
  author: string; // Add the "author" field
}

const validationSchema = yup.object({
  title: yup.string().required("Title is required"),
  image: yup.string().required("Image URL is required"),
  description: yup.string().required("Description is required"),
  topic: yup.string().required("Topic is required"), // Add validation for "topic"
  author: yup.string().required("Author is required"), // Add validation for "author"
});

const AddArticle = ({ onAddArticle, articles }) => {
  const initialValues: FormValues = {
    title: "",
    topic: "", // Initialize "topic"
    image: "",
    description: "",
    author: "", // Initialize "author"
  };

  const submitHandler = (values, { resetForm }) => {
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
                as={TextField} // Add "topic" field
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
                as={TextField} // Add "author" field
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
