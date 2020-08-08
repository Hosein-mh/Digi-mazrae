import express from 'express';
import userCtrl from '../controllers/user.controller';
import authCtrl from '../controllers/auth.controller';
import categoryCtrl, { multerMiddleware } from '../controllers/category.controller';

const router = express.Router();

router.route('/api/categories/:userId')
  .post(authCtrl.requireSignin, authCtrl.hasAdminRole, multerMiddleware, categoryCtrl.create);

router.route('/api/categories/')
  .get(categoryCtrl.list);

router.route('/api/categories/:userId/:categoryId')
  .delete(authCtrl.requireSignin, authCtrl.hasAdminRole, categoryCtrl.deleteCategory);
  

router.param('userId', userCtrl.userById);
router.param('categoryId', categoryCtrl.categoryById);

export default router;