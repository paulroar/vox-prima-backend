
# VÖX PRIMA – Backend

This is the backend for **VÖX PRIMA**, an artistic t-shirt e-commerce application. It provides all API functionalities including authentication, product catalog management, and order creation.

## 🚀 Features

- User registration and login with JWT authentication.
- CRUD operations for **Products** and **Orders**.
- Middleware for route protection.
- Secure storage of user credentials with bcrypt.
- Connected to MongoDB Atlas.
- Cloudinary image integration via image URLs.

## 🧱 Technologies

- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **JWT**
- **bcryptjs**
- **dotenv**
- **CORS**

## 🔐 Environment Variables

Create a `.env` file with:

```
PORT=3000
MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
```

## 📁 Folder Structure

```
/
├── config/              # DB connection
├── controllers/         # Route logic
├── models/              # Mongoose schemas
├── routes/              # API routes
├── seed/                # Seed file for products
├── utils/               # Token, auth middleware
├── public/images/       # Legacy images (replaced by Cloudinary)
└── server.js            # Main entry
```

## 🧪 Run Locally

1. Clone the repo:
```bash
git clone https://github.com/youruser/vox-prima-backend.git
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

4. Seed products (if needed):
```bash
node seed/productsSeed.js
```

## 🔗 Deployment

Deployed via **Fly.io**:
👉 https://vox-prima-backend.fly.dev/api/products

## 🙌 Credits

Created by **Paulo Prado** as part of Ironhack’s Final Project.

## 📃 License

MIT
