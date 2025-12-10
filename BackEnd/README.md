# Civic Assessment Backend

Node.js + Express + MongoDB authentication API

## Setup Instructions

### 1. Install Dependencies

```bash
cd BackEnd
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the `BackEnd` directory with:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/civic-assessment
JWT_SECRET=your_jwt_secret_key_change_this_in_production
NODE_ENV=development
```

### 3. MongoDB Setup

Make sure MongoDB is running locally:

```bash
# On Windows with MongoDB installed
mongod

# Or using Docker
docker run -d -p 27017:27017 --name mongodb mongo
```

### 4. Start the Server

**Development Mode** (with auto-reload):
```bash
npm run dev
```

**Production Mode**:
```bash
npm start
```

Server will run on `http://localhost:5000`

## API Endpoints

### 1. Register User
```
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}

Response (201):
{
  "success": true,
  "message": "User registered successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "65abc123...",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

### 2. Login User
```
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}

Response (200):
{
  "success": true,
  "message": "Logged in successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "65abc123...",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

### 3. Get User Profile (Protected)
```
GET /api/auth/profile
Authorization: Bearer <token>

Response (200):
{
  "success": true,
  "message": "Profile retrieved successfully",
  "user": {
    "id": "65abc123...",
    "name": "John Doe",
    "email": "john@example.com",
    "createdAt": "2023-12-10T10:30:00.000Z"
  }
}
```

## Error Responses

### Validation Error (400)
```json
{
  "success": false,
  "message": "Please provide name, email, and password"
}
```

### Unauthorized (401)
```json
{
  "success": false,
  "message": "Invalid credentials"
}
```

### User Exists (400)
```json
{
  "success": false,
  "message": "User already exists with that email"
}
```

### Invalid Token (401)
```json
{
  "success": false,
  "message": "Not authorized to access this route"
}
```

## Project Structure

```
BackEnd/
├── models/
│   └── User.js           # MongoDB User schema
├── routes/
│   └── auth.js           # Authentication routes
├── middleware/
│   └── auth.js           # JWT verification middleware
├── server.js             # Express server setup
├── package.json          # Dependencies
├── .env                  # Environment variables (not committed)
├── .gitignore            # Git ignore file
└── README.md             # This file
```

## Features

✅ User Registration with validation
✅ Secure Password Hashing (bcrypt)
✅ JWT Authentication
✅ Protected Routes
✅ Email uniqueness check
✅ Error handling
✅ CORS enabled

## Testing with cURL or Postman

### Register
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }'
```

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'
```

### Get Profile (with token)
```bash
curl -X GET http://localhost:5000/api/auth/profile \
  -H "Authorization: Bearer <your_token_here>"
```

## Dependencies

- **express**: Web framework
- **mongoose**: MongoDB ODM
- **bcrypt**: Password hashing
- **jsonwebtoken**: JWT generation and verification
- **dotenv**: Environment variables
- **cors**: Cross-origin requests
- **nodemon**: Auto-restart during development

## Notes

- Passwords are hashed using bcrypt with 10 salt rounds
- JWT tokens expire after 7 days
- Passwords are not returned in API responses
- All emails are stored in lowercase for consistency
- User creation includes automatic timestamps
