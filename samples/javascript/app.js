require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("./middleware/auth");

const app = express();

app.use(express.json());

// importing user context
const User = require("./model/user");

// Register
app.post("/register", async (req, res) => {
    try {
      // Get user input
      const { first_name, last_name, email, password } = req.body;
  
      // Validate user input
      if (!(email && password && first_name && last_name)) {
        res.status(400).send("All input is required");
      }
  
      // check if user already exist
      // Validate if user exist in our database
      const oldUser = await User.findOne({ email });
  
      if (oldUser) {
        return res.status(409).send("User Already Exist. Please Login");
      }
  
      //Encrypt user password
      encryptedPassword = await bcrypt.hash(password, 10);
  
      // Create user in our database
      const user = await User.create({
        first_name,
        last_name,
        email: email.toLowerCase(), // sanitize: convert email to lowercase
        password: encryptedPassword,
      });
  
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
      // save user token
      user.token = token;
      res.cookie(process.env.LOGIN_COOKIE, token);
  
      // return new user
      res.status(201).json(user);
    } catch (err) {
      console.log(err);
    }
  });

// Login
app.post("/login", async (req, res) => {
    try {
      // Get user input
      const { email, password } = req.body;
  
      // Validate user input
      if (!(email && password)) {
        res.status(400).send("All input is required");
      }
      // Validate if user exist in our database
      const user = await User.findOne({ email });
  
      if (user && (await bcrypt.compare(password, user.password))) {
        // Create token
        const token = jwt.sign(
          { user_id: user._id, email },
          process.env.TOKEN_KEY,
          {
            expiresIn: "2h",
          }
        );
  
        // save user token
        user.token = token;
        res.cookie(process.env.LOGIN_COOKIE, token);
  
        // user
        res.status(200).json(user);
      }
      res.status(400).send("Invalid Credentials");
    } catch (err) {
      console.log(err);
    }
  });

  //logout
  app.post("/logout", auth, (req, res) => {
    res.clearCookie(process.env.LOGIN_COOKIE)
    res.status(200).json({
      status: 200,
      message: "Logout Successful"
    })
  })

  //getLoggedInUserDetails
  app.get("/loggedInUser", auth, (req, res) => {
    try {
      const token = req.headers[process.env.TOKEN_HEADER_KEY]
      const decoded = jwt.verify(token, process.env.TOKEN_KEY);
      const userEmail = decoded["email"]
  
      const user = await User.findOne({email: userEmail}).select("-password")
      return res.json({
        status: 200,
        message: "Operation Successful",
        body: user
      })
  
    } catch (err) {
      console.log(err);
      res.status(500).send("Server Error")
    }
  })

module.exports = app;