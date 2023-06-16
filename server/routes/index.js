const router = require('express').Router();

const orderRoute = require('./orderRoutes');
const productRoutes = require('./productRoutes');
const uploadRoutes = require('./uploadRoutes');
const userRoutes = require('./userRoutes');

router.use('/order', orderRoute);
router.use('/product', productRoutes);
router.use('/upload', uploadRoutes);
router.use('/user', userRoutes);

router.use((req, res) => res.send('Wrong route!'));

module.exports = router;
