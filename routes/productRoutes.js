const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const accessProtected = require("../middleware/authMiddleware");

// 🔹 Get all products
router.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// 🔹 Get 8 random products
router.get("/random/all", async (req, res) => {
    try {
      const count = await Product.countDocuments();
      const random = Math.max(0, Math.floor(Math.random() * (count - 8)));
  
      const products = await Product.find().skip(random).limit(8);
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json({ message: "Server error" });
    }
  });

// 🔹 Get a single product

router.get("/:id", async (req, res) => {
    try {const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
    
        res.status(200).json(product);
      } catch (err) {
        res.status(500).json({ message: 'Server error' });
      }
    });

// 🔹 Create a new product (Admin only)
router.post("/", accessProtected,  async (req, res) => {
    const { name, description, price, image, category, stock } = req.body;

    try {
        const newProduct = new Product({
            name,
            description,
            price,
            image,
            category,
            stock,
        });

        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// 🔹 Update a product (Admin only)
router.put("/:id", accessProtected, async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// 🔹 Delete a product (Admin only)
router.delete("/:id", accessProtected, async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
