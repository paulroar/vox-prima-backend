const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
const accessProtected = require("../middleware/authMiddleware");
const adminOnly = require("../middleware/adminMiddleware");

// 🔹 Create new order (at checkout)
router.post("/", accessProtected, async (req, res) => {
  const { orderItems, totalPrice } = req.body;

  if (!orderItems || orderItems.length === 0) {
    return res.status(400).json({ message: "Order is empty" });
  }

  try {
    const newOrder = new Order({
      user: req.user._id,
      orderItems,
      totalPrice,
    });

    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 🔹 Get all orders (admin only)
router.get("/", accessProtected, adminOnly, async (req, res) => {
  try {
    const orders = await Order.find().populate("user", "name email");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 🔹 Get logged-in user's orders
router.get("/my-orders", accessProtected, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).populate("orderItems.product");
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 🔹 Get a single order (admin or user)

router.get("/:id", accessProtected, async (req, res) => {
    try {
        const order = await Order.findById(req.params.id).populate("orderItems.product");
    
        if (!order) {
          return res.status(404).json({ message: "Order not found" });
        }
    
        // Checks if the request is from the logged in user or an admin
        if (order.user.toString() !== req.user._id.toString() && !req.user.isAdmin) {
          return res.status(403).json({ message: "Unauthorized access" });
        }
    
        res.status(200).json(order);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });

// 🔹 Update order status (admin)
router.put("/:id", accessProtected, adminOnly, async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;