const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();



const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
   .then(() =>{
    console.log("MongoDB Connected Successfully!");
   })
   .catch((error) =>{
    console.log("MongoDB Connection Error:", error);
   });

app.get('/', (req, res) =>{
  res.send("Backend server is running!");
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>{
  console.log(`Server is running on port: ${PORT}`);
});