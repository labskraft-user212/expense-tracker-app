/**
 * @swagger
 * tags:
 *   name: Transactions
 *   description: API for managing transactions
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Transaction:
 *       type: object
 *       required:
 *         - description
 *         - amount
 *         - transactionDate
 *         - transactionType
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the transaction
 *         description:
 *           type: string
 *           description: Description of the transaction
 *         amount:
 *           type: number
 *           description: Amount of the transaction
 *         transactionDate:
 *           type: string
 *           format: date
 *           description: Date of the transaction
 *         transactionType:
 *           type: string
 *           enum: [income, expense]
 *           description: Type of the transaction
 *       example:
 *         _id: 60c72b2f9b1e8e001c8e4b8a
 *         description: Salary
 *         amount: 5000
 *         transactionDate: 2024-06-20
 *         transactionType: income
 */

/**
 * @swagger
 * /api/transactions:
 *   post:
 *     summary: Create a new transaction
 *     tags: [Transactions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Transaction'
 *     responses:
 *       201:
 *         description: Transaction created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Transaction'
 *       400:
 *         description: Invalid input
 *   get:
 *     summary: Get all transactions
 *     tags: [Transactions]
 *     responses:
 *       200:
 *         description: List of all transactions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Transaction'
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/transactions/{id}:
 *   get:
 *     summary: Get a transaction by ID
 *     tags: [Transactions]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The transaction id
 *     responses:
 *       200:
 *         description: Transaction data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Transaction'
 *       404:
 *         description: Transaction not found
 *   put:
 *     summary: Update a transaction by ID
 *     tags: [Transactions]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The transaction id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Transaction'
 *     responses:
 *       200:
 *         description: Transaction updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Transaction'
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Transaction not found
 *   delete:
 *     summary: Delete a transaction by ID
 *     tags: [Transactions]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The transaction id
 *     responses:
 *       200:
 *         description: Transaction deleted successfully
 *       404:
 *         description: Transaction not found
 */

const express = require('express');
const router = express.Router();
const TransactionsController = require('../controllers/transactionsController');
const transactionsController = new TransactionsController();

// Create a new transaction
router.post('/', transactionsController.createTransaction);

// Get all transactions
router.get('/', transactionsController.getTransactions);

// Get a transaction by ID
router.get('/:id', transactionsController.getTransactionById);

// Update a transaction by ID
router.put('/:id', transactionsController.updateTransaction);

// Delete a transaction by ID
router.delete('/:id', transactionsController.deleteTransaction);

module.exports = router;