const router = require('express').Router();

const { addOrderItems, getMyOrders, getOrderById, updateOrderToPaid, updateOrderToDelivered, getOrders } = require('../controllers/ordercontroller.js');
const { protect, admin } = require('../middleware/authMiddleware.js');

router.route('/')
    .post(protect, addOrderItems)
    .get(protect, admin, getOrders );
router
    .route('/mine')
    .get(protect, getMyOrders);

router
    .route('/:id/deliver')
    .put(protect, admin, updateOrderToDelivered);

router
    .route('/:id')
    .get(protect, getOrderById);

router
    .route('/:id/pay')
    .put(protect, admin, updateOrderToPaid);


module.exports = router;