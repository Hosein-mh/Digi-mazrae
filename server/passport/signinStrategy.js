import PassportLocal from 'passport-local';
import User from '../models/user.model';
import jwt from 'jsonwebtoken';
import config from './../../config/config';

const signinStrategy = new PassportLocal.Strategy({
  usernameField: 'email',
  passwordField: 'password',
}, async (email, password, done) => {
  try {
    let user = await User.findOne({
      email
    });
    if (!user) 
      return done('کاربر یافت نشد');

    if (!user.authenticate(password))
      return done('ایمیل یا پسورد وارده اشتباه است');

    const token = jwt.sign({
      _id: user._id
    }, config.jwtSecret);

    return done(null, {
      _id: user._id, name: user.name, email: user.email, admin: user.admin
    }, token)
  } catch (error) {
    console.log(error)
    return done('مشکلی در عملیات ورود');
  }
});

export default signinStrategy;