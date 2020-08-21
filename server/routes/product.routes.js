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

router.route('/api/products/:userId/:productId')
  .put(authCtrl.requireSignin, authCtrl.hasAdminRole, productCtrl.updateProduct)
  .delete(authCtrl.requireSignin, authCtrl.hasAdminRole, productCtrl.deleteProduct);

router.route('/api/products/photo/:userId/:productId')
  .put(authCtrl.requireSignin, authCtrl.hasAdminRole, multerMiddleware('products'), productCtrl.updatePhoto);

router.param('userId', userCtrl.userById);
router.param('productId', productCtrl.productById);

export default router;