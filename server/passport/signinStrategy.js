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
    if (!user || !user.authenticate(password)) 
      return done('ایمیل یا پسورد وارد شده اشتباه است');

    await user.generateToken((genTokenError, userWithToken) => {
      if (genTokenError)
        return done(genTokenError);
        
      userWithToken.hashed_password = undefined;
      userWithToken.salt = undefined;
      return done(null, userWithToken);
    });
  } catch (error) {
    console.log(error)
    return done('مشکلی در عملیات ورود');
  }
});

export default signinStrategy;