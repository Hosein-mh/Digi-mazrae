import PassportGoogleOauth from 'passport-google-oauth';
import config from '../../config/config';

import User from '../models/user.model';

const GoogleStrategy = PassportGoogleOauth.OAuth2Strategy;

export default new GoogleStrategy({
  clientID: config.GOOGLE_CONSUMER_KEY,
  clientSecret: config.GOOGLE_CONSUMER_SECRET,
  callbackURL: "http://localhost:3000/auth/google/callback",
},
  (accessToken, refreshToken, profile, done) => {
    User.findOne({ email : profile.emails[0].value } , (err , user) => {
      if(err) return done(err);
      if(user) return done(null , user);

      const newUser = new User({
          name : profile.displayName,
          email : profile.emails[0].value,
          password : profile.id
      });

      newUser.save(err => {
          if(err) throw err;
          done(null , newUser);
      })

  })
  }
);
