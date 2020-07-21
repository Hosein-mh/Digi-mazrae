import passport from 'passport';
import User from '../models/user.model';

// Import all Strategies
import signupStrategy from './signupStrategy';
import signinStrategy from './signinStrategy';
import googleStrategy from './googleStrategy';

passport.serializeUser(function(user, done) {
  done(null, user.id);
});
 
passport.deserializeUser(function(id, done) {
  User.findById(id, function (err, user) {
      done(err, user);
  });
});

passport.use('local-signup', signupStrategy); 
passport.use('local-signin', signinStrategy); 
passport.use('google', googleStrategy);

export default passport;