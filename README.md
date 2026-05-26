# Resume Review Web App

## Overview

Resume Review Web App is a full-stack web application designed to help users improve their resumes and explore internship opportunities. The project combines a React frontend with a Node.js/Express backend and MongoDB database integration.

The application includes multiple user-facing pages, including a home page, resume review page, internship/job listing page, and resource page. It was built to support students and early-career applicants who want a more organized way to improve their application materials and explore career opportunities.

## Project Motivation

Many students struggle with writing strong resumes, organizing their experience, and finding relevant internships. This project was created to provide a centralized platform where users can review resume-related content, access career resources, and explore internship opportunities in one web application.

## Features

- Multi-page React web application
- Resume review page for career preparation
- Internship/job listing page
- Career resources page
- Navigation bar for smooth page switching
- Express backend server
- MongoDB database connection
- API endpoint for fetching internship data
- Environment variable testing support
- Responsive frontend styling

## Tech Stack

### Frontend
- React
- JavaScript
- HTML
- CSS
- React Router
- Create React App

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- dotenv

### Data
- Internship/job data stored in JSON or MongoDB collection
- MongoDB collection for internship records

## Application Pages

| Page | Description |
|---|---|
| Home | Landing page for the application |
| Resume | Resume review and improvement section |
| Jobs / Internships | Displays internship or job opportunity data |
| Resources | Career and application resources |
| Navbar | Navigation component used across the app |

## Repository Structure

```bash
Resume-Review-Web/
│── public/
│── src/
│   │── App.js
│   │── App.css
│   │── index.js
│   │── index.css
│   │── reportWebVitals.js
│   │── setupTests.js
│   │── App.test.js
│   │── pages/
│   │   │── home.js
│   │   │── Resume.js
│   │   │── Internships.js
│   │   │── Resource.js
│   │   │── navbar.js
│── server.js
│── Internships.json
│── package.json
│── package-lock.json
│── README.md
```

## Backend API

The backend uses Express and Mongoose to connect to MongoDB and retrieve internship records.

### Endpoint

```http
GET /api/Internships
```

### Purpose

Fetches internship data from the MongoDB `Internships` collection and returns the results as JSON.

### Example Response

```json
[
  {
    "title": "Software Engineering Intern",
    "description": "Internship description here",
    "company": "Company Name",
    "datePosted": "2025-01-01T00:00:00.000Z"
  }
]
```

## Installation

Clone the repository:

```bash
git clone https://github.com/MK20905/Resume-Review-Web.git
cd Resume-Review-Web
```

Install dependencies:

```bash
npm install
```

## Running the Frontend

Start the React development server:

```bash
npm start
```

The frontend should run at:

```bash
http://localhost:3000
```

## Running the Backend

Start the backend server:

```bash
node server.js
```

The backend API runs on:

```bash
http://localhost:3000/api/Internships
```

If both frontend and backend use the same port, update one of them to use a different port, such as `5000` for the backend.

Example backend port update:

```javascript
app.listen(5000, () => {
  console.log('Server started on port 5000');
});
```

Then the API would run at:

```bash
http://localhost:5000/api/Internships
```

## Environment Variables

Create a `.env` file to store sensitive configuration values.

Example:

```env
MONGODB_URI=your_mongodb_connection_string
REACT_APP_API_URL=http://localhost:5000
REACT_APP_RESUME_KEY=your_resume_key
```

Important: Do not commit your real MongoDB password or API keys to GitHub.

## Security Note

The current backend should be updated so the MongoDB connection string is stored in `.env` instead of being written directly inside `server.js`.

Recommended approach:

```javascript
mongoose.connect(process.env.MONGODB_URI)
```

This makes the project safer and more professional for GitHub.

## How the App Works

1. The user opens the React frontend.
2. The navigation bar allows the user to move between Home, Resume, Jobs, and Resources.
3. The Jobs/Internships page can request internship data from the backend.
4. The Express backend connects to MongoDB using Mongoose.
5. The backend returns internship records through the `/api/Internships` endpoint.
6. The frontend displays the information to users.

## Skills Demonstrated

- Full-stack JavaScript development
- React component-based design
- Frontend routing and navigation
- Express API development
- MongoDB database integration
- Mongoose schema design
- REST API data retrieval
- Environment variable management
- Career-focused web application development

## Future Improvements

- Add resume upload functionality
- Add AI-generated resume feedback
- Add resume score by category
- Add job description and resume matching
- Add user authentication
- Add internship search and filters
- Add save/bookmark internship feature
- Deploy frontend with Vercel or Netlify
- Deploy backend with Render or Railway
- Move MongoDB credentials fully into `.env`
- Improve UI/UX design with cleaner cards and responsive layouts

## Author

**Khang Do Minh Le**  
Applied Data Science Student, Penn State University  
GitHub: [MK20905](https://github.com/MK20905)
