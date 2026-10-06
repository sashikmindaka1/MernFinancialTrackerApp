const mongoose = require('mongoose');

 const walletSchema = new mongoose.Schema({
  totalSalary: {
    type: Number,
    required: true
  }
  
 });

 module.exports = mongoose.model('Wallet', walletSchema);  