import express from 'express';
import userCtrl from '../controllers/user.controller';
import authCtrl from '../controllers/auth.controller';
import categoryCtrl from '../controllers/category.controller';
import { multerMiddleware } from '../middlewares/multer.middleware';

const router = express.Router();

router.route('/api/categories/:userId')
  .post(authCtrl.requireSignin, authCtrl.hasAdminRole, multerMiddleware('categories'), categoryCtrl.create);

router.route('/api/categories/')
  .get(categoryCtrl.list);
router.route('/api/categories/:categoryId')
  .get(categoryCtrl.read);

router.route('/api/categories/:userId/:categoryId')
  .put(authCtrl.requireSignin, authCtrl.hasAdminRole, multerMiddleware('categories'), categoryCtrl.updateCategory)
  .delete(authCtrl.requireSignin, authCtrl.hasAdminRole, categoryCtrl.deleteCategory);
  

router.param('userId', userCtrl.userById);
router.param('categoryId', categoryCtrl.categoryById);

export default router;