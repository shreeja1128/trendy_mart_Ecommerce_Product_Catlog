// src/data/products.js
import product1 from '../assets/product1.jpg';
import product2 from '../assets/product2.jpg';

const products = [
  {
    id: 1,
    name: "Colorful Sneakers",
    price: "$59.99",
    category: "Footwear",
    image: product1,
    trending: true
  },
  {
    id: 2,
    name: "Graphic T-Shirt",
    price: "$29.99",
    category: "Apparel",
    image: product2,
    trending: false
  }
];

export default products;
