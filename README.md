# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# Post Management App

## Overview
This is a simple React application that allows users to manage posts. It provides functionalities to fetch, add, update, and delete posts using JSONPlaceholder API as a mock backend.

## Features
- Fetch and display a list of posts
- Add a new post
- Update an existing post
- Delete a post

## Technologies Used
- React.js
- Axios (for API calls)
- JSONPlaceholder API (for mock data)

## Installation

### Prerequisites
Ensure you have the following installed:
- Node.js (>=14.x.x)
- npm or yarn

### Steps to Run the Project
1. Clone the repository:
   ```bash
   git clone <your-repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd post-management-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open your browser and visit:
   ```
   http://localhost:3000
   ```

## Project Structure
```
post-management-app/
│── src/
│   │── components/
│   │   │── Form.jsx
│   │   │── PostList.jsx
│   │── api/
│   │   │── PostApi.jsx
│   │── App.jsx
│   │── index.js
│── public/
│── package.json
│── README.md
```

## API Endpoints
This project uses the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) to simulate backend operations.
- **Get Posts:** `GET /posts`
- **Add Post:** `POST /posts`
- **Update Post:** `PUT /posts/:id`
- **Delete Post:** `DELETE /posts/:id`

## Usage
1. The application fetches and displays posts from JSONPlaceholder when loaded.
2. Users can add a new post by filling the form and clicking "Add Post".
3. To update a post, click the "Edit" button, modify the details in the form, and click "Edit Post".
4. Posts can be deleted by clicking the "Delete" button.

## Contributions
Feel free to contribute by forking the repository and submitting a pull request.

## License
This project is licensed under the MIT License.
