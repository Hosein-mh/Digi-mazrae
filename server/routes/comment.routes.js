import express from 'express';
// imports Controllers
import userCtrl from '../controllers/user.controller';
import authCtrl from '../controllers/auth.controller';
import commentCtrl from '../controllers/comment.controller';
import productCtrl from '../controllers/product.controller';

const router = express.Router();

router.route('/api/comments/:userId/:productId')
  .post(authCtrl.requireSignin, commentCtrl.create);

router.route('/api/comments/:productId')
  .get(commentCtrl.list);
router.route('/api/comments/:commentId')
  .get(commentCtrl.read);

router.route('/api/categories/:userId/:commentId')
  .put(authCtrl.requireSignin, authCtrl.hasAdminRole, commentCtrl.updateComment)
  .delete(authCtrl.requireSignin, authCtrl.hasAdminRole, commentCtrl.deleteComment);
  

router.param('userId', userCtrl.userById);
router.param('commentId', commentCtrl.commentById);
router.param('productId', productCtrl.productById);

export default router;