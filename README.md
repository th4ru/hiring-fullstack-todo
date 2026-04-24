# Full-Stack TODO Application

A complete TODO application with React frontend and Node.js/Express backend with MongoDB.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js with Express.js
- **Database**: MongoDB with Mongoose

## Features

- View all TODO items
- Create new TODO items (title + optional description)
- Edit TODO items
- Mark TODO as done/undone
- Delete TODO items
- RESTful API
- Clean UI with responsive design

## Project Structure

```
todo-app/
├── backend/
│   ├── config/
│   ├── models/
│   ├── routes/
│   ├── package.json
│   ├── server.js
│   └── README.md
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── App.js
    │   └── index.js
    ├── public/
    ├── package.json
    └── README.md
```

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up MongoDB:
   - Install MongoDB locally or create a MongoDB Atlas cluster
   - Update the `MONGO_URI` in `.env` file with your connection string

4. Start the backend server:
   ```
   npm run dev
   ```

The backend will run on http://localhost:5000

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

The frontend will run on http://localhost:3000

## API Endpoints

- `GET /api/todos` - Fetch all todos
- `POST /api/todos` - Create a new todo
- `PUT /api/todos/:id` - Update a todo
- `PATCH /api/todos/:id/done` - Toggle done status
- `DELETE /api/todos/:id` - Delete a todo

## Deployment Suggestions

### Backend Deployment

- Use services like Heroku, Railway, or Vercel for easy deployment
- Set environment variables for production (MongoDB URI, PORT)
- Consider using PM2 for process management

### Frontend Deployment

- Use Netlify, Vercel, or GitHub Pages for static hosting
- Build the production version: `npm run build`
- Update API base URL for production environment

### Database

- For production, use MongoDB Atlas or other cloud MongoDB services
- Ensure proper security configurations (authentication, IP whitelisting)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request