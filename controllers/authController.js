const jwt = require("jsonwebtoken");
const db = require("./../models");
const bcrypt = require("bcryptjs");
const Customer = db.customers;
const { promisify } = require("util");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.EXPIRES_IN,
  });
};

const comparePasswords = async (plainPassword, hashedPassword) => {
  try {
    return bcrypt.compare(plainPassword, hashedPassword);
  } catch (error) {
    throw new Error("Password comparison failed");
  }
};

exports.signup = async (req, res, next) => {
  try {
    const newUser = await Customer.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      resetPassword: req.body.resetPassword,
    });

    const token = signToken(newUser.id);

    res.status(201).json({ msg: "user Created", newUser, token });
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ msg: "bad request" });
  }
};

exports.login = async (req, res, next) => {
  try {
    const { password } = req.body;
    const { email } = req.body;
    if (!email || !password) {
      return next(Error("Email and password are required"));
    }
    const user = await Customer.findOne({ where: { email } });
    if (!user) {
      return next(Error("User not found"));
    }

    const isPasswordValid = await comparePasswords(password, user.password);
    if (!isPasswordValid) {
      return next(Error("Incorrect password/username"));
    }

    const token = signToken(user.id);
    res.status(200).json({ msg: "Success", token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ Error: error.message });
  }
  next();
};

exports.protect = async (req, res, next) => {
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.toLowerCase().startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return next(Error("Please login"));
    }

    // verify token
    const decoded = promisify(jwt.verify)(token, process.env.JWT_SECRET);

    const freshUser = await Customer.findOne({ where: { id: decoded.id } });

    if (!freshUser) {
      res.status(401).json({ message: "User doesn't exist" });
    }

    req.user = freshUser;

    next();
  } catch (error) {
    console.log(error);
  }
};
