const db = require('../config/db');
const { User, Product, Order } = require('../models');
const productSeed = require('./products.json');

db.once('open', async () => {
  await User.deleteMany({});
  await Product.deleteMany({});
  await Order.deleteMany({});

  const technologies = await Product.insertMany(productSeed);

  console.log('Seed worked');
  process.exit(0);
});
