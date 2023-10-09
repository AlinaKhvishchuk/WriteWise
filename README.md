# WriteWise - Dynamic Front Page with React, TypeScript, Formik, and MUI

This project is an implementation of a dynamic front page of a news website, created using React.js and TypeScript. It allows users to interact with a list of article fetched from an API endpoint. The front page features:

- a search bar for filtering articles
- sorting functionality
- the ability to add new articles
- pagination

The application is designed for type safety and follows best practices for React development.

## Features

- **Header Section**: The header displays the page title and includes a search bar for filtering articles by name.

- **List of Items**: The application fetches and displays a list of articles from my own API endpoint. The project uses an API created by me ([NC_News_API](https://nc-news-00jh.onrender.com/api/)). First loading could take some time because of 'cold start'. Each article includes the following information: id, title, author, description, image_url and date.

- **Filter Functionality**: Users can apply multiple filters to the list of articles.

- **Sort Functionality**: Users can sort all articles by various attributes such as name, id, or date.

- **Add New Items**: The application includes a form to add new article to the list. Since my API lacks a POST endpoint, new articles are added to the state and displayed on the list of all articles. The form has fields for at title, description, image URL, author.

## Technologies Used

- **React.js**: The project is developed using React for building the user interface.

- **TypeScript**: TypeScript is used to ensure type safety in the codebase.

- **Formik**: Formik is used for creating and managing the form for adding new items.

- **Material-UI (MUI)**: Material-UI is used for creating the user interface components and ensuring a cohesive design.

## Contact

If you have any questions or inquiries, please feel free to contact me at alina.khvishchuk@gmail.com
