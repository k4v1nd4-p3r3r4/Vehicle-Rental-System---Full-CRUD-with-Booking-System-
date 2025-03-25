# 🚗 Vehicle Rental System - Full CRUD with Booking System

# Vehicle Rental System

A full CRUD vehicle rental system with a booking system.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [License](#license)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/Vehicle-Rental-System.git
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

