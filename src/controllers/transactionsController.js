const Transaction = require('../models/transaction');

class TransactionsController {
    // Create a new transaction
    async createTransaction(req, res) {
        try {
            const { description, amount, transactionDate, transactionType } = req.body;
            const transaction = new Transaction({ description, amount, transactionDate, transactionType });
            await transaction.save();
            res.status(201).json(transaction);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    // Get all transactions
    async getTransactions(req, res) {
        try {
            const transactions = await Transaction.find().sort({ transactionDate: -1 });
            res.json(transactions);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    // Get a transaction by ID
    async getTransactionById(req, res) {
        try {
            const transaction = await Transaction.findById(req.params.id);
            if (!transaction) {
                return res.status(404).json({ error: 'Transaction not found' });
            }
            res.json(transaction);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    // Update a transaction by ID
    async updateTransaction(req, res) {
        try {
            const { description, amount, transactionDate, transactionType } = req.body;
            const transaction = await Transaction.findByIdAndUpdate(
                req.params.id,
                { description, amount, transactionDate, transactionType },
                { new: true, runValidators: true }
            );
            if (!transaction) {
                return res.status(404).json({ error: 'Transaction not found' });
            }
            res.json(transaction);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    // Delete a transaction by ID
    async deleteTransaction(req, res) {
        try {
            const transaction = await Transaction.findByIdAndDelete(req.params.id);
            if (!transaction) {
                return res.status(404).json({ error: 'Transaction not found' });
            }
            res.json({ message: 'Transaction deleted successfully' });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = TransactionsController;