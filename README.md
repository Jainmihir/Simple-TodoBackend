# Todo App

This is a simple Todo application with authentication built with Node.js, Express, and MongoDB. 

## Features

- It have User registration and login
- JWT authentication
- All the CRUD operations for todos
- You can Pin/unpin todos
- Pagination for listing todos
- Search todos by title


## Installation

1. Clone the repository

   ```Terminal
   git clone https://github.com/Jainmihir/Simple-TodoBackend.git
   cd Simple-TodoBackend
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Set up environment variables

   ```bash
   touch .env | right-click to create .env
   ```

4. You generate this Jwt Authentication with the help of this command 
   ```
      node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
   ```

5. Run the server
   ```bash
   npm start
   ```

## PostMan Collection
```
   Link : " "
```

## API Endpoints

### Auth

- `POST /api/auth/register` - Registration a new User/Client
- `POST /api/auth/login` - Login a user/Client with credentials

### Todos

- All Routes are require for authentication first
- `POST /api/todos` - Create a new todo 
- `GET /api/todos` - Get all todos
- `GET /api/todos/search` - Search todos by title
- `GET /api/todos/:id` - Get a todo by ID 
- `PUT /api/todos/:id` - Update a todo by ID
- `DELETE /api/todos/:id` - Delete a todo by ID

