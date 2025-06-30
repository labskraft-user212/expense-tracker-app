# Expense Tracker API

## Overview
The Expense Tracker API is a Node.js application built with Express that allows users to manage their financial transactions. It provides a RESTful API for performing CRUD operations on transactions, which include income and expenses.

## Features
- Create, read, update, and delete transactions
- Store transaction details such as description, amount, date, and type
- Connect to a MongoDB database for persistent storage

## Technologies Used
- Node.js
- Express
- MongoDB (via Mongoose)
- dotenv for environment variable management

## Project Structure
```
expense-tracker-api
├── src
│   ├── app.js                  # Entry point of the application
│   ├── models
│   │   └── transaction.js       # Mongoose model for transactions
│   ├── routes
│   │   └── transactions.js       # Routes for transaction CRUD operations
│   └── controllers
│       └── transactionsController.js # Controller for handling transaction logic
├── .env.dev                     # Environment variables (MongoDB URI)
├── package.json                 # NPM configuration file
└── README.md                    # Project documentation
```

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd expense-tracker-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env.dev` file in the root directory and add your MongoDB URI:
   ```
   MONGODB_URI=<your_mongodb_uri>
   ```

4. **Run the application**
   ```bash
   npm start
   ```

5. **API Endpoints**
   - `POST /transactions` - Create a new transaction
   - `GET /transactions` - Retrieve all transactions
   - `GET /transactions/:id` - Retrieve a transaction by ID
   - `PUT /transactions/:id` - Update a transaction by ID
   - `DELETE /transactions/:id` - Delete a transaction by ID

## Usage
You can use tools like Postman or curl to interact with the API endpoints. Make sure to set the appropriate HTTP methods and headers as required.

## License
This project is licensed under the MIT License.