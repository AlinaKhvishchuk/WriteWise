import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { TextField, Button, Grid } from "@mui/material";

interface FormValues {
  title: string;
  image: string;
  description: string;
}

const validationSchema = yup.object({
  title: yup.string().required("Title is required"),
  image: yup.string().required("Image URL is required"),
  description: yup.string().required("Description is required"),
});

const AddArticle = ({ onSubmit }) => {
  const initialValues: FormValues = {
    title: "",
    image: "",
    description: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
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
