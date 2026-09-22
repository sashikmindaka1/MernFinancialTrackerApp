const mongoose = require('mongoose');

 new walletSchema = new mongoose.Schema({
  totalSalary: {
    type: Number,
    required: true

  }
 });

 module.exports = mongoose.model('Wallet', walletSchema);