@echo off
REM Quick Start Script for Civic Assessment Project

echo.
echo ============================================
echo Civic Assessment - Quick Start
echo ============================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js is not installed. Please install Node.js 14+ first.
    echo Download from: https://nodejs.org/
    pause
    exit /b 1
)

echo Node.js version:
node --version
echo.

REM Setup Backend
echo.
echo ============================================
echo SETTING UP BACKEND
echo ============================================
echo.

cd BackEnd

if not exist node_modules (
    echo Installing backend dependencies...
    call npm install
    if errorlevel 1 (
        echo ERROR: Failed to install backend dependencies
        pause
        exit /b 1
    )
) else (
    echo Backend dependencies already installed
)

if not exist .env (
    echo Creating .env file...
    (
        echo PORT=5000
        echo MONGODB_URI=mongodb://localhost:27017/civic-assessment
        echo JWT_SECRET=your_jwt_secret_key_change_this_in_production
        echo NODE_ENV=development
    ) > .env
    echo .env file created
) else (
    echo .env file already exists
)

cd ..

REM Setup Frontend
echo.
echo ============================================
echo SETTING UP FRONTEND
echo ============================================
echo.

cd FrontEnd

if not exist node_modules (
    echo Installing frontend dependencies...
    call npm install
    if errorlevel 1 (
        echo ERROR: Failed to install frontend dependencies
        pause
        exit /b 1
    )
) else (
    echo Frontend dependencies already installed
)

if not exist .env (
    echo Creating .env file...
    echo VITE_API_URL=http://localhost:5000/api > .env
    echo .env file created
) else (
    echo .env file already exists
)

cd ..

echo.
echo ============================================
echo SETUP COMPLETE!
echo ============================================
echo.
echo Next steps:
echo.
echo 1. Make sure MongoDB is running:
echo    mongod (if installed locally)
echo    OR
echo    docker run -d -p 27017:27017 --name mongodb mongo
echo.
echo 2. Start backend server:
echo    cd BackEnd
echo    npm run dev
echo.
echo 3. In another terminal, start frontend:
echo    cd FrontEnd
echo    npm run dev
echo.
echo 4. Open browser and visit:
echo    http://localhost:5173
echo.
echo Documentation: See FULL_SETUP_GUIDE.md
echo.
pause
