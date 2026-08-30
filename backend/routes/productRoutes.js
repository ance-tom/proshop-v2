import express from 'express';
const router = express.Router();
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getTopProducts,
  getLowStockProducts,
} from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';
import checkObjectId from '../middleware/checkObjectId.js';
import Product from '../models/productModel.js';

router.route('/').get(getProducts).post(protect, admin, createProduct);
router.route('/:id/reviews').post(protect, checkObjectId, createProductReview);
router.get('/top', getTopProducts);
router.get('/low-stock', protect, admin, getLowStockProducts);
router
  .route('/:id')
  .get(checkObjectId, getProductById)
  .put(protect, admin, checkObjectId, updateProduct)
  .delete(protect, admin, checkObjectId, deleteProduct);

router.get('/search', (req, res) => {
  const query = req.query.q;
  Product.find({ name: query });
});

export default router;
