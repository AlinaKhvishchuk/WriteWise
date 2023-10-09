import * as React from "react";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { TextField, Button, Grid } from "@mui/material";
import type { Article } from "../Articles/ArticleCard";

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

type FormDialogProps = {
  onAddArticle: (values: FormValues) => void;
  articles: Article[];
};

const FormDialog = ({ onAddArticle, articles }: FormDialogProps) => {
  const [open, setOpen] = React.useState(false);

  const initialValues: FormValues = {
    title: "",
    topic: "",
    image: "",
    description: "",
    author: "",
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
    <div>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        sx={{
          marginLeft: "8px",
          marginTop: "20px",
          width: "280px",
        }}
      >
        Add a new article
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add a new article</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To a new article to this website, please fill in the fields below
          </DialogContentText>
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
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button onClick={handleClose} type="submit">
                    Submit
                  </Button>
                </DialogActions>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FormDialog;
