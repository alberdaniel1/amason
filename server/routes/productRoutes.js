const router = require('express').Router();

const { getProducts, getProductById, createProduct, updateProduct, deleteProduct, createProductReview, getTopProducts } = require('../controllers/productController.js');
const { protect, admin } = require('../middleware/authMiddleware.js');

router.route('/').get(getProducts).post(protect, admin, createProduct);
router.route('/:id/reviews').post(protect, createProductReview);
router.route('/top', getTopProducts);
router
.route('/:id')
.get(getProductById)
.put(protect, admin, updateProduct)
.delete(protect, admin, deleteProduct);

module.exports = router;
