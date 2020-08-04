import express from 'express';
import userCtrl from '../controllers/user.controller';
import categoryCtrl, { multerMiddleware } from '../controllers/category.controller';

const router = express.Router();

router.route('/api/categories/:userId')
  .post(multerMiddleware, categoryCtrl.create);
  

router.param('userId', userCtrl.userById);

export default router;