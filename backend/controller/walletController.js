// import pre created Wallet 
const Wallet = require('../model/Wallet');

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

    res.states(200).json(wallet);

    
  } catch (error) {

    res.states(500).json({messagr: "server error", error: error.message});
    
  }
};

// export data for ause another files
module.exports = {
  saveSalary
};