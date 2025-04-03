const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const accessProtected = require("../middleware/authMiddleware");

// 🔹 Register User
router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if email already exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Password Hash
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const user = new User({
            name,
            email,
            password: hashedPassword,
        });

        await user.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// 🔹 User Login
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Generate the JWT Token
        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.json({ token, user: { id: user._id, name: user.name, email: user.email, isAdmin: user.isAdmin } });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// 🔹 Logged User 

router.get("/profile", accessProtected, async (req, res) => {
    res.status(200).json(req.user); 
});

// 🔹 Update User

router.put('/profile', accessProtected, async (req, res) => {
    const { name, email } = req.body;
  
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: 'User not found' });
  
    user.name = name || user.name;
    user.email = email || user.email;
  
    const updatedUser = await user.save();
    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
    });
  });


module.exports = router;
