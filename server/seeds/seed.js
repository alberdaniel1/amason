const db = require('../config/db');
const { Products } = require('../models');

const productSeed = require('./products.json');

db.once('open', async () => {
    await Products.deleteMany({});

    const technologies = await Products.insertMany(productSeed);

    process.exit(0);
});