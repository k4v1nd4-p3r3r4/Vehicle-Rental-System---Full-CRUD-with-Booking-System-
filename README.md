# 🚗 Vehicle Rental System - Full CRUD with Booking System


## Overview

The Vehicle Rental System is a web application that allows users to rent vehicles and manage bookings. It provides a full CRUD (Create, Read, Update, Delete) functionality for vehicles and bookings. The system includes user authentication and authorization to ensure secure access to the application.

## Technology

The project is built using the following technologies:

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express.js**: A minimal and flexible Node.js web application framework.
- **MySQL**: A relational database management system.
- **Multer**: A middleware for handling `multipart/form-data`, used for uploading files.
- **JWT**: JSON Web Tokens for authentication and authorization.
- **dotenv**: A module to load environment variables from a `.env` file.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [License](#license)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/k4v1nd4-p3r3r4/Vehicle-Rental-System---Full-CRUD-with-Booking-System-.git
    cd Vehicle-Rental-System
    ```

    
2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up the environment variables:
    Create a `.env` file in the root directory and add the following:
    ```properties
    PORT=3000
    DB_HOST=localhost
    DB_USER=root
    DB_PASS=
    DB_NAME=vehiclerental
    JWT_SECRET=secret
    ```

4. Start the server:
    ```bash
    npm start
    ```

## Usage

1. Ensure your MySQL database is running and properly configured.
2. Use Postman or any other API testing tool to interact with the API endpoints.

## API Endpoints

### Authentication Routes
- **Register**: `POST /api/register`
- **Login**: `POST /api/login`

### Vehicle Routes
- **Get All Vehicles**: `GET /api/vehicle`
- **Get Vehicle by ID**: `GET /api/vehicle/:id`
- **Add New Vehicle**: `POST /api/vehicle/add`
- **Update Vehicle**: `PUT /api/vehicle/:id`
- **Delete Vehicle**: `DELETE /api/vehicle/:id`

### Booking Routes
- **Get All Bookings**: `GET /api/booking`
- **Get Booking by ID**: `GET /api/booking/:id`
- **Add New Booking**: `POST /api/booking`
- **Update Booking**: `PUT /api/booking/:id`
- **Delete Booking**: `DELETE /api/booking/:id`

## Environment Variables

- `PORT`: The port number on which the server will run.
- `DB_HOST`: The hostname of the MySQL database.
- `DB_USER`: The username for the MySQL database.
- `DB_PASS`: The password for the MySQL database.
- `DB_NAME`: The name of the MySQL database.
- `JWT_SECRET`: The secret key for JWT authentication.

## License

This project is licensed under the MIT License.

