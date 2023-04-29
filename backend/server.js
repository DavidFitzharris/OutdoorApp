//Creating a Express server 
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
//For Using API's
//const axios = require('axios');
//Database
const mongoose = require('mongoose');
const routes = require('./routes');

//Setting up to listen on port 3000
const PORT = process.env.PORT || 3000;

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//Mongodb Database
//Connecting to the database
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb+srv://davefitz:Password123@cluster0.yfm3dqi.mongodb.net/MyDatabase');
}

// //Creating a new database 'Schema'
// var Schema = mongoose.Schema
// var userSchema = new Schema({
//     name: String,
//     email: String,
//     password: String,
//     hikingData: String
// })

// //Creating a new database model
// //For creating and sending to mongoDB
// var userModel = mongoose.model('Users', userSchema);

//test
app.get('/', (req, res) =>
    res.send('Server Running'))

// //Testing data inputs from user inputs
// app.post('/api/userlogin', (req, res) => {
//     console.log('post Sucessfull');
//     console.log(req.body)
//     //console.log(req.body.name);
//     console.log(req.body.email);
//     console.log(req.body.password);

//     res.status(201).json({ message: 'Details: ' + req.body });

//   //   //for our database
//   //   userModel.create({
//   //     name: req.body.name,
//   //     email: req.body.email,
//   //     password: req.body.password
//   // });

// });


//Routes
app.use('/api', routes);

//Display errors with server
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//connection string
//mongodb+srv://davefitz:Password123@cluster0.yfm3dqi.mongodb.net/test
