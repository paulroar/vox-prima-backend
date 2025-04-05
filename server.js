const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();
connectDB();
app.use(express.json());
app.use(cors({
  origin: 'https://voxprima.netlify.app',
  credentials: true,
}));
app.use('/images', express.static('public/images'));

app.use(cors({ origin: 'https://voxprima.netlify.app', credentials: true }));
app.use(express.json());

// 📌 Importing and using routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));

const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server running on http://0.0.0.0:${PORT}`);
});