import express from 'express';
import emailCtrl from '../controllers/email.controller';

const router = express.Router();

router.route('/reset_password/user/:email')
  .post(emailCtrl.sendPasswordResetEmail);

router.route('/reset_password/recieve_new_password/:userId/:token')
  .post(emailCtrl.recieveNewPassword);

export default router;