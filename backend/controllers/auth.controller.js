const mongoose = require('mongoose');
const User = require('../models/user.model');
const bcrypt = require('bcryptjs');

exports.login = async (req, res) => {
  try {
    //Finding by email and storing in userLogin
    //User from our user model
    const userLogin = await User.findOne({ email: req.body.email });

    if (userLogin) {
      //Hash the password for comparison in storage, takes corrisponding salt saved
      const hashedPassword = await bcrypt.hash(req.body.password, userLogin.salt);
      //return res.status(201).json({ message: 'User ' + hashedPassword + ' working so far' });
      if (userLogin.password == hashedPassword) {
        return res.status(201).json({
          message: 'User ' + userLogin.name + ' Logged in',
          userDetails: {
            name: userLogin.name,
            email: userLogin.email,
          },
        });
      } else {
        //For testing
        //return res.status(401).json({ message: 'HashedPassword' + hashedPassword + ' Save HPassword: ' + userLogin.password });
        return res.status(401).json({ message: 'User ' + req.body.email + ' password incorrect' });
      }

    } else {
      return res.status(401).json({ message: 'User ' + req.body.email + ' not recognised' });
    }
  } catch (error) {
    //Send an error response
    res.status(500).json({ message: 'Server error with login. Check details or please try again later.' });
  }
};


exports.register = async (req, res) => {
  try {
    //Check if the user already exists using email
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use.' });
    }

    //Hash the password for security in storage 
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //Create a new user, User being from models
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      salt: salt,
    });

    //Save the new user to the database
    const savedUser = await newUser.save();

    //Send a success response
    res.status(201).json({
      message: 'User registered successfully.',
      userId: savedUser._id,
      name: savedUser.name,
      email: savedUser.email,
    });
  } catch (error) {
    //Send an error response
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};