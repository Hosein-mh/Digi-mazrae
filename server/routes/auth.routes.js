import express from 'express';
import authCtrl from '../controllers/auth.controller.js';
import passport from 'passport';

const router = express.Router();

router.route('/auth/signin')
  .post(authCtrl.signin);
router.route('/auth/signout')
  .get(authCtrl.signout);

router.route('/auth/google')
  .get(passport.authenticate('google', {
    scope: ['profile', 'email']}));

router.route('/auth/google/callback')
  .get(passport.authenticate('google', {
    failureRedirect: '/signin'
  }), (req, res) => {
    res.redirect('/');
  });

export default router;