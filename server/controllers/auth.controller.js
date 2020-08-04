import expressJwt from 'express-jwt';
import config from './../../config/config';
import passport from '../passport';
import User from '../models/user.model';

let respUser = {};
const signin = (req, res, next) => {

  passport.authenticate('local-signin', (error, user) => {
    if (error)
      return res.status(401).json({error});

    if (user) {
      // res.cookie('t', token, {
      //   expires: new Date() + 9999
      // });
      return res.status(200).json(user)
    }
  })(req, res, next);

};

const requestGoogleSignin = (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  
  passport.authenticate('google', {
    scope: ['profile', 'email']})(req, res, next);
};

const verifyGoogleSignin = (req, res, next) => {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);

  passport.authenticate('google', (err, user) => {
    if (err) {
      res.status(401).json({
        error: 'پاسخ درستی از گوگل دریافت نشد.'
      })
    }
    user.salt = undefined;
    user.hashed_password = undefined;

    respUser = {...user._doc};
    req.user = respUser;
    next();
  })(req, res, next);
}

const signout = async (req, res) => {
  res.clearCookie('t');
  const { userId } = req.params;

  let user = await User.findById(userId);
  if (! user) 
    return res.status(400).json({
      error: 'اطلاعات کاربر برای خروج اشتباه است',
    });

  user.token = '';
  await user.save();

  return res.status('200').json({
    message: 'با موفقیت خارج شدید'
  })
};

const requireSignin = expressJwt({
  secret: config.jwtSecret,
  userProperty: 'auth'
})

const hasAuthorization = (req, res, next) => {
  const authorized = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!authorized) {
    return res.status('403').json({
      error: 'لطفا مجدد وارد سایت شوید'
    })
  }
  next();
}

const hasAdminRole = (req, res, next) => {
  const authorized = req.profile && req.profile.admin == true;
  if (!authorized) {
    return res.status('403').json({
      error: 'شما اجازه ی دسترسی به این درخواست را ندارید'
    });
  };
  next();
}

export default {
  signin,
  signout,
  requireSignin,
  hasAuthorization,
  hasAdminRole,
  requestGoogleSignin,
  verifyGoogleSignin,
}