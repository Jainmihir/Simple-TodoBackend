# Todo App

This is a simple Todo application with authentication built with Node.js, Express, and MongoDB.

## Features

- User registration and login
- JWT authentication
- CRUD operations for todos
- Pagination for listing todos
- Search todos by title
- Pin/unpin todos

## Installation

1. Clone the repository

   ```bash
   git clone https://github.com/yourusername/todo-app.git
   cd todo-app
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Set up environment variables

   ```bash
   cp .env.example .env
   ```

4. Run the server
   ```bash
   npm start
   ```

## API Endpoints

### Auth

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login a user

### Todos

- `POST /api/todos` - Create a new todo (requires authentication)
- `GET /api/todos` - Get all todos (requires authentication)
- `GET /api/todos/search` - Search todos by title (requires authentication)
- `GET /api/todos/:id` - Get a todo by ID (requires authentication)
- `PUT /api/todos/:id` - Update a todo by ID (requires authentication)
- `DELETE /api/todos/:id` - Delete a todo by ID (requires authentication)

## Postman Collection

You can import the Postman collection from the following link:

[Postman Collection](https://techforensics.postman.co/workspace/My-Workspace~37e59789-aafa-4572-844b-b5529a209c24/collection/32230196-ea9f03e5-ab39-4fb2-9151-54c59d2e17e1?action=share&creator=32230196)
