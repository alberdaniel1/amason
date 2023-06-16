const db = require('../config/connection');
const { User, Product, Order, Review} = require('../models/index');
const productSeed = require('./products.json');
const userSeed = require('./user.json')

db.once('open', async () => {
  await User.deleteMany({});
  await Product.deleteMany({});
  await Order.deleteMany({});
  await Review.deleteMany({});

  await Product.create(productSeed);
//   await User.create(userSeed);

  console.log('Seed worked?');
  process.exit(0);
});
