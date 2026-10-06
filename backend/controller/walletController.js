// import pre created Wallet 
const Wallet = require('../models/Wallet');

// create a arrow function to save salary 
const saveSalary = async (req, res) => {
  try {
    
    // get total salary (numaric value) from frontend
    const {totalSalary } = req.body;

    // find a wallet is currently avaible or not
    let wallet = await Wallet.findOne();

    if(wallet) {
      
      wallet.totalSalary = totalSalary;
      await wallet.save();


    } else {

      wallet = new Wallet ({ totalSalary});
      await wallet.save();
    }

    res.status(200).json(wallet);

    
  } catch (error) {

    res.status(500).json({messagr: "server error", error: error.message});
    
  }
};

const checkWallet = async(req, res) => {

  try {
    
    const wallet = await Wallet.findOne();

    if (wallet) {
      return res.status(200).json({exists : true, data : wallet});
      
    }
    res.status(200).json({exists : false});
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
    
  }








}

// export data for ause another files
module.exports = {saveSalary, checkWallet};