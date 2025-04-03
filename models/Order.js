const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  orderItems: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
      name: { type: String, required: true },
      quantity: { type: Number, required: true, default: 1 },
      price: { type: Number, required: true },
    }
  ],
  totalPrice: { type: Number, required: true },
  paymentStatus: { type: String, enum: ["pending", "paid", "failed"], default: "pending" },
  deliveryStatus: { type: String, enum: ["processing", "shipped", "delivered"], default: "processing" },
}, { timestamps: true });

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
