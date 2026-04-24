# TODO Backend

This is the backend for the TODO application built with Node.js, Express, and MongoDB.

## Setup Instructions

1. Install dependencies:
   ```
   npm install
   ```

2. Set up MongoDB:
   - Install MongoDB locally or use MongoDB Atlas
   - Update the `MONGO_URI` in `.env` file with your MongoDB connection string

3. Start the server:
   ```
   npm run dev
   ```

The server will run on http://localhost:5000

## API Endpoints

- GET /api/todos - Fetch all todos
- POST /api/todos - Create a new todo
- PUT /api/todos/:id - Update a todo
- PATCH /api/todos/:id/done - Toggle done status
- DELETE /api/todos/:id - Delete a todo