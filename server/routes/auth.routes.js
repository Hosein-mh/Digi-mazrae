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
    const token = req.user.token;
    res.cookie('g_t', token);
    res.redirect('/');
  });

// router.route('/auth/google')
//   .get(authCtrl.requestGoogleSignin);
// router.route('/auth/google/callback')
//   .get(authCtrl.verifyGoogleSignin);

export default router;