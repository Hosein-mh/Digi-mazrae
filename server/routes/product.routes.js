import express from 'express';
import userCtrl from '../controllers/user.controller';
import authCtrl from '../controllers/auth.controller';
import productCtrl from '../controllers/product.controller';
import { multerMiddleware } from '../middlewares/multer.middleware';

const router = express.Router();

router.route('/api/products/:userId')
  .post(authCtrl.requireSignin, authCtrl.hasAdminRole, multerMiddleware('products'), productCtrl.create);

router.route('/api/products/')
  .get(productCtrl.list);
router.route('/api/products/:productId')
  .get(productCtrl.read);
router.route('/api/products/bycategory/:categoryId')
  .get(productCtrl.listByCategory);

router.route('/api/products/:userId/:productId')
  .put(authCtrl.requireSignin, authCtrl.hasAdminRole, productCtrl.updateProduct)
  .delete(authCtrl.requireSignin, authCtrl.hasAdminRole, productCtrl.deleteProduct);

// Product photo and gallery routes:
router.route('/api/products/photo/:userId/:productId')
  .put(authCtrl.requireSignin, authCtrl.hasAdminRole, multerMiddleware('products'), productCtrl.updatePhoto);
router.route('/api/products/gallery/:productId')
  .get(productCtrl.listGallery);
router.route('/api/products/gallery/:userId/:productId')
  .put(authCtrl.requireSignin, authCtrl.hasAdminRole, multerMiddleware('products/gallery'), productCtrl.updateGallery);
router.route('/api/products/gallery/remove/:userId/:productId')
  .put(authCtrl.requireSignin, authCtrl.hasAdminRole, productCtrl.deleteFromGallery)

router.param('userId', userCtrl.userById);
router.param('productId', productCtrl.productById);

export default router;