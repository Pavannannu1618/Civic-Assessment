# Civic Assessment - Full Stack Setup Guide

## Project Structure

```
Civic-Task/
├── BackEnd/                 # Node.js + Express + MongoDB
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── auth.js
│   ├── middleware/
│   │   └── auth.js
│   ├── server.js
│   ├── package.json
│   ├── .env
│   ├── .gitignore
│   └── README.md
└── FrontEnd/               # React + Vite + Bootstrap
    ├── src/
    │   ├── Components/
    │   │   ├── NavBar.jsx
    │   │   ├── Login.jsx
    │   │   ├── SignUp.jsx
    │   │   ├── AuthForms.css
    │   │   └── (other components)
    │   ├── services/
    │   │   └── authService.js
    │   ├── main.jsx
    │   └── index.css
    ├── .env
    ├── package.json
    └── vite.config.js
```

## Backend Setup (Node.js + Express + MongoDB)

### Prerequisites
- Node.js 14+ installed
- MongoDB running locally or MongoDB Atlas account

### Installation

1. **Navigate to backend directory**
```bash
cd BackEnd
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**

Create a `.env` file in the `BackEnd` directory:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/civic-assessment
JWT_SECRET=your_jwt_secret_key_change_this_in_production
NODE_ENV=development
```

For MongoDB Atlas (cloud):
```env
MONGODB_URI=mongodb+srv://username:password@cluster0.mongodb.net/civic-assessment
```

4. **Start MongoDB** (if running locally)

**Windows (with MongoDB installed):**
```bash
mongod
```

**Or using Docker:**
```bash
docker run -d -p 27017:27017 --name mongodb mongo
```

5. **Start the backend server**

**Development mode (with auto-reload):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

Server will run on: `http://localhost:5000`

### Backend API Endpoints

#### 1. Register User
```
POST /api/auth/register
Content-Type: application/json

Request:
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

#### 2. Login User
```
POST /api/auth/login
Content-Type: application/json

Request:
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

#### 3. Get User Profile (Protected)
```
GET /api/auth/profile
Authorization: Bearer <token>
Content-Type: application/json

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

---

## Frontend Setup (React + Vite)

### Prerequisites
- Node.js 14+ installed
- Backend running on `http://localhost:5000`

### Installation

1. **Navigate to frontend directory**
```bash
cd FrontEnd
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**

Create a `.env` file in the `FrontEnd` directory:

```env
VITE_API_URL=http://localhost:5000/api
```

4. **Start the frontend development server**
```bash
npm run dev
```

Frontend will run on: `http://localhost:5173`

### Frontend Features

- **User Registration**: Sign up form with name, email, and password
- **User Login**: Login form with email and password
- **Form Validation**: Real-time client-side validation
- **JWT Authentication**: Token-based authentication
- **Protected Routes**: User profile accessible only with valid token
- **Bootstrap Styling**: Professional UI with Bootstrap 5.3.8
- **Responsive Design**: Mobile-friendly layout

---

## Testing the Application

### Using cURL

**Register a new user:**
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }'
```

**Login user:**
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'
```

**Get profile (replace TOKEN with actual token):**
```bash
curl -X GET http://localhost:5000/api/auth/profile \
  -H "Authorization: Bearer TOKEN"
```

### Using Postman

1. **Create a Register request:**
   - Method: POST
   - URL: `http://localhost:5000/api/auth/register`
   - Body (JSON):
   ```json
   {
     "name": "John Doe",
     "email": "john@example.com",
     "password": "password123"
   }
   ```

2. **Create a Login request:**
   - Method: POST
   - URL: `http://localhost:5000/api/auth/login`
   - Body (JSON):
   ```json
   {
     "email": "john@example.com",
     "password": "password123"
   }
   ```

3. **Create a Profile request:**
   - Method: GET
   - URL: `http://localhost:5000/api/auth/profile`
   - Headers:
     - Key: `Authorization`
     - Value: `Bearer <token_from_login_response>`

### Using Browser

1. Open `http://localhost:5173` in your browser
2. Click the **Login** button in the navbar
3. Enter test credentials to sign up or log in
4. Token is automatically saved to localStorage
5. Form will submit to the backend API

---

## File Descriptions

### Backend Files

**`server.js`**
- Main Express server setup
- MongoDB connection
- Routes configuration
- Middleware setup (CORS, JSON parser)
- Error handling

**`models/User.js`**
- MongoDB User schema
- Password hashing with bcrypt
- Email validation
- Password comparison method

**`routes/auth.js`**
- `/api/auth/register` - User registration
- `/api/auth/login` - User login
- `/api/auth/profile` - Get user profile (protected)

**`middleware/auth.js`**
- JWT token verification
- Authorization middleware (protect function)
- Token extraction from headers

**`.env`**
- Environment variables
- MongoDB connection string
- JWT secret key
- Server port

### Frontend Files

**`services/authService.js`**
- API calls to backend
- Token management (localStorage)
- User session management
- Helper methods (getUser, isAuthenticated, logout)

**`Components/Login.jsx`**
- Login form component
- Email and password validation
- API integration
- Error handling
- Success message display

**`Components/SignUp.jsx`**
- Registration form component
- Name, email, password validation
- Password confirmation
- API integration
- Error handling

**`Components/NavBar.jsx`**
- Navigation bar
- Login/SignUp modal state management
- Modal rendering
- Logo and navigation buttons

**`Components/AuthForms.css`**
- Modal styling
- Form group styling
- Input field styling
- Button styling
- Alert styling (success/danger)
- Responsive design

---

## Common Issues and Solutions

### MongoDB Connection Error
**Problem:** "MongoDB connection failed"
**Solution:** 
- Ensure MongoDB is running: `mongod` or `docker run -d -p 27017:27017 mongo`
- Check MONGODB_URI in .env file
- For MongoDB Atlas, use the correct connection string with credentials

### CORS Error
**Problem:** "Access to XMLHttpRequest has been blocked by CORS policy"
**Solution:**
- Backend already has CORS enabled in server.js
- Ensure backend is running on port 5000
- Check VITE_API_URL in frontend .env file

### JWT Token Errors
**Problem:** "Not authorized to access this route"
**Solution:**
- Ensure token is being sent in Authorization header
- Token format must be: `Bearer <token>`
- Verify token is not expired (expires in 7 days)
- Check JWT_SECRET matches between registration and verification

### Port Already in Use
**Problem:** "Port 5000/5173 already in use"
**Solution:**
- For backend: Change PORT in .env file
- For frontend: Change port in vite.config.js or kill existing process

---

## Deployment

### Backend Deployment (Heroku/Render)

1. Set environment variables on hosting platform
2. Ensure MongoDB Atlas is used for database
3. Update MONGODB_URI to cloud database
4. Deploy using git push or platform CLI

### Frontend Deployment (Vercel/Netlify)

1. Update VITE_API_URL to production backend URL
2. Build: `npm run build`
3. Deploy dist/ folder
4. Configure environment variables on platform

---

## Security Notes

- ⚠️ Change JWT_SECRET in production
- ⚠️ Use environment variables for sensitive data
- ⚠️ Enable HTTPS in production
- ⚠️ Use strong passwords
- ⚠️ Implement rate limiting for API endpoints
- ⚠️ Store tokens securely (consider httpOnly cookies instead of localStorage)

---

## Next Steps

1. Set up MongoDB connection
2. Install backend dependencies: `npm install`
3. Start backend server: `npm run dev`
4. Install frontend dependencies: `npm install`
5. Start frontend: `npm run dev`
6. Test API endpoints using Postman or browser
7. Deploy both applications

