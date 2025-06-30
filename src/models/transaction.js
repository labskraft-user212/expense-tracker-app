const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    transactionDate: {
        type: Date,
        required: true
    },
    transactionType: {
        type: String,
        enum: ['income', 'expense'],
        required: true
    }
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;