
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const products = [
  {
    "name": "Focus Your Mind",
    "description": "Minimalist abstract artwork printed on premium cotton. Unisex style.",
    "price": 24.9,
    "image": "https://res.cloudinary.com/dszajuzln/image/upload/v1743684006/sohlj1imlkckxxbjgddy.jpg",
    "category": "T-Shirts",
    "brand": "VÖX PRIMA",
    "countInStock": 10
  },
  {
    "name": "Waves of Thought",
    "description": "Stylish design for creative thinkers. Breathable cotton.",
    "price": 27.5,
    "image": "https://res.cloudinary.com/dszajuzln/image/upload/v1743684004/q5aebzq06kktigzjdsma.jpg",
    "category": "T-Shirts",
    "brand": "VÖX PRIMA",
    "countInStock": 12
  },
  {
    "name": "Inner Galaxy",
    "description": "A journey within. Explore abstract space through design.",
    "price": 29.0,
    "image": "https://res.cloudinary.com/dszajuzln/image/upload/v1743684004/loihursfjdkgwebgdwcj.jpg",
    "category": "T-Shirts",
    "brand": "VÖX PRIMA",
    "countInStock": 9
  },
  {
    "name": "Concrete Dreams",
    "description": "Urban-inspired surreal art. Soft touch, bold expression.",
    "price": 25.0,
    "image": "https://res.cloudinary.com/dszajuzln/image/upload/v1743684003/hnxmxgjgklepy3w78qqf.jpg",
    "category": "T-Shirts",
    "brand": "VÖX PRIMA",
    "countInStock": 8
  },
  {
    "name": "Wired Horizon",
    "description": "Digital abstract lines stretching across imagination.",
    "price": 22.5,
    "image": "https://res.cloudinary.com/dszajuzln/image/upload/v1743684003/rqwzynv9qlcbrksaynkz.jpg",
    "category": "T-Shirts",
    "brand": "VÖX PRIMA",
    "countInStock": 10
  },
  {
    "name": "Golden Ratio",
    "description": "Balance and precision with a modern twist.",
    "price": 26.9,
    "image": "https://res.cloudinary.com/dszajuzln/image/upload/v1743684002/csk5aeyimigstvhfy9kb.jpg",
    "category": "T-Shirts",
    "brand": "VÖX PRIMA",
    "countInStock": 11
  },
  {
    "name": "Offbeat Pulse",
    "description": "Rhythmic design inspired by abstract electronic music.",
    "price": 28.0,
    "image": "https://res.cloudinary.com/dszajuzln/image/upload/v1743684001/oa4qwmxnyhuxhtotfvgn.jpg",
    "category": "T-Shirts",
    "brand": "VÖX PRIMA",
    "countInStock": 6
  },
  {
    "name": "Soft Grid",
    "description": "Structured beauty and muted tones in harmony.",
    "price": 24.0,
    "image": "https://res.cloudinary.com/dszajuzln/image/upload/v1743683999/hnupguzyyyqmmfu0cm74.jpg",
    "category": "T-Shirts",
    "brand": "VÖX PRIMA",
    "countInStock": 10
  },
  {
    "name": "Noir Vision",
    "description": "Mystery and modernism in one piece. A real statement.",
    "price": 27.3,
    "image": "https://res.cloudinary.com/dszajuzln/image/upload/v1743683999/kp1zaqt1dsgamkl2xgqr.jpg",
    "category": "T-Shirts",
    "brand": "VÖX PRIMA",
    "countInStock": 10
  },
  {
    "name": "Dream Layer",
    "description": "Layered thoughts in high contrast and minimal form.",
    "price": 23.9,
    "image": "https://res.cloudinary.com/dszajuzln/image/upload/v1743683999/cbfjplkzfwuuxlzcziea.jpg",
    "category": "T-Shirts",
    "brand": "VÖX PRIMA",
    "countInStock": 15
  },
  {
    "name": "Harmonic Fragments",
    "description": "Visual fragments of dreams, collected and stitched.",
    "price": 25.5,
    "image": "https://res.cloudinary.com/dszajuzln/image/upload/v1743683998/smjhy1nd8c3cptx0urj3.jpg",
    "category": "T-Shirts",
    "brand": "VÖX PRIMA",
    "countInStock": 8
  },
  {
    "name": "Crimson Noise",
    "description": "Art meets chaos in this limited piece.",
    "price": 30.0,
    "image": "https://res.cloudinary.com/dszajuzln/image/upload/v1743683998/nyk79r8scbocis3bobkb.jpg",
    "category": "T-Shirts",
    "brand": "VÖX PRIMA",
    "countInStock": 7
  },
  {
    "name": "Mirror Echo",
    "description": "Reflections in rhythm and geometric dissonance.",
    "price": 28.7,
    "image": "https://res.cloudinary.com/dszajuzln/image/upload/v1743683998/yi3kddz5oav5d2b3jlm9.jpg",
    "category": "T-Shirts",
    "brand": "VÖX PRIMA",
    "countInStock": 6
  },
  {
    "name": "Equinox Mode",
    "description": "Balance of light and dark. Everyday essential.",
    "price": 26.0,
    "image": "https://res.cloudinary.com/dszajuzln/image/upload/v1743683995/v6t95mymfjtbrtxzckz2.jpg",
    "category": "T-Shirts",
    "brand": "VÖX PRIMA",
    "countInStock": 12
  },
  {
    "name": "Signal Flux",
    "description": "Graphic inspiration from visual noise and motion.",
    "price": 29.2,
    "image": "https://res.cloudinary.com/dszajuzln/image/upload/v1743683995/hkjkpp6fpfigtjgmvp2d.jpg",
    "category": "T-Shirts",
    "brand": "VÖX PRIMA",
    "countInStock": 9
  },
  {
    "name": "Shadow Pulse",
    "description": "Deep tones and faded lines, echoing mystery.",
    "price": 23.5,
    "image": "https://res.cloudinary.com/dszajuzln/image/upload/v1743683994/tqvt5ldt368srenrm57i.jpg",
    "category": "T-Shirts",
    "brand": "VÖX PRIMA",
    "countInStock": 14
  },
  {
    "name": "Chroma State",
    "description": "Clean spectrum design for modern minds.",
    "price": 25.4,
    "image": "https://res.cloudinary.com/dszajuzln/image/upload/v1743683994/pmji2eceltyvrmzupixx.jpg",
    "category": "T-Shirts",
    "brand": "VÖX PRIMA",
    "countInStock": 10
  },
  {
    "name": "Mono Dreams",
    "description": "Classic monochrome with a surreal twist.",
    "price": 22.2,
    "image": "https://res.cloudinary.com/dszajuzln/image/upload/v1743683994/keut7mxjlbhvk7cm0i1h.jpg",
    "category": "T-Shirts",
    "brand": "VÖX PRIMA",
    "countInStock": 11
  },
  {
    "name": "Soft Fade",
    "description": "A minimalist tone-on-tone fade with style.",
    "price": 21.9,
    "image": "https://res.cloudinary.com/dszajuzln/image/upload/v1743683994/gt2s4q7kzmydoyai8wxp.jpg",
    "category": "T-Shirts",
    "brand": "VÖX PRIMA",
    "countInStock": 13
  },
  {
    "name": "Sunken Code",
    "description": "For developers, dreamers, and those in between.",
    "price": 26.6,
    "image": "https://res.cloudinary.com/dszajuzln/image/upload/v1743683993/svyets4902z3mq3j2wxd.jpg",
    "category": "T-Shirts",
    "brand": "VÖX PRIMA",
    "countInStock": 8
  },
  {
    "name": "Cosmic Debug",
    "description": "Final frontier of minimal coding aesthetics.",
    "price": 27.8,
    "image": "https://res.cloudinary.com/dszajuzln/image/upload/v1743683994/tjsmyws86zdn3tiiqc0h.jpg",
    "category": "T-Shirts",
    "brand": "VÖX PRIMA",
    "countInStock": 10
  },
  {
    "name": "Mecha Skull Symphony",
    "description": "Perfect for those who embrace attitude, mystery, and a touch of rebellious art.",
    "price": 25.8,
    "image": "https://res.cloudinary.com/dszajuzln/image/upload/v1744115436/zwreqaka75jhpml8pp5m.jpg",
    "category": "T-Shirts",
    "brand": "VÖX PRIMA",
    "countInStock": 10
  }

];

const importData = async () => {
  try {
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error('Error with data import', error);
    process.exit(1);
  }
};

importData();
