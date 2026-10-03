const express = require('express');
const router = express.Router();

// call savesalary function from walletController
const { saveSalary, checkWallet } = require('../controller/walletController');

// if anyone input ('/') then run savesalary
router.post('/', saveSalary);
router.get('/', checkWallet);

module.exports = router;