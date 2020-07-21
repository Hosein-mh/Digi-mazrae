import expressJwt from 'express-jwt';
import config from './../../config/config';
import passport from '../passport';

const signin = (req, res, next) => {

  passport.authenticate('local-signin', (error, user, token) => {
    if (error)
      return res.status(401).json({error});

    if (user && token) {
      // res.cookie('t', token, {
      //   expires: new Date() + 9999
      // });
      return res.status(200).json(user)
    }
  })(req, res, next);

}

const signout = (req, res) => {
  res.clearCookie('t');
  return res.status('200').json({
    message: 'با موفقیت خارج شدید'
  })
}

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

export default {
  signin,
  signout,
  requireSignin,
  hasAuthorization
}