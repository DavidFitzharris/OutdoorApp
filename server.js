//Creating a Express server 
const express = require('express');
const app = express();

//Setting up to listen on port 3000
const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});