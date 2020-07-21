import PassportLocal from 'passport-local';
import User from '../models/user.model'; 
import dbErrorHandler from '../helpers/dbErrorHandler';

const signUpStrategy = new PassportLocal.Strategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, async (req, email, password, done) => {
  try {
    const userData = {
      name: req.body.name,
      email: email.trim(),
      password: password.trim(),
      admin: false
    }
    const user = new User(userData);
    await user.save();
    user.salt = undefined;
    user.hashed_password = undefined;

    return done(null, user);
  } catch (err) {
    const error = dbErrorHandler.getErrorMessage(err);
    return done(error);
  }
});

export default signUpStrategy;