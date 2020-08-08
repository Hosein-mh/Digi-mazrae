import express from 'express';
import userCtrl from '../controllers/user.controller';
import categoryCtrl, { multerMiddleware } from '../controllers/category.controller';

const router = express.Router();

router.route('/api/categories/:userId')
  .post(multerMiddleware, categoryCtrl.create);

router.route('/api/categories/')
  .get(categoryCtrl.list);

router.route('/api/categories/:userId/:categoryId')
  .delete(categoryCtrl.deleteCategory);
  

router.param('userId', userCtrl.userById);
router.param('categoryId', categoryCtrl.categoryById);

export default router;