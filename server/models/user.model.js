import mongoose from 'mongoose';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import config from '../../config/config';

import findOrCreate from 'mongoose-findorcreate';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'وارد کردن نام الزامیست'
  },
  email: {
    type: String,
    trim: true,
    unique: "این ایمیل قبلا در سایت ثبت نام کرده",
    match: [/.+\@.+\..+/,'ایمیل معتبر نیست'],
    required: 'وارد کردن ایمیل الزامیست',
    lowercase: true,
  },
  hashed_password: {
    type: String,
    required: 'وارد کردن پسورد الزامیست'
  },
  salt: String,
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  },
  admin: {
    type: Boolean,
    default: false,
  },
  token: {
    type: String,
  },
});

UserSchema.plugin(findOrCreate);

UserSchema
  .virtual('password')
  .set(function(password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function () {
    return this._password;
  });

UserSchema.path('hashed_password').validate(function (v) {
  if (this._password && this._password.length < 6) {
    this.invalidate('password', 'پسورد نمی تواند کمتر از 6 کاراکتر داشته باشد');
  }
  if (this.isNew && !this._password) {
    this.invalidate('password', 'فیلد پسورد وارد نشده');
  }
}, null);

// UserSchema.index('token', { expireAfterSeconds: 20 });

UserSchema.methods = {
  authenticate: function(plainText) {
    return this.encryptPassword(plainText) === this.hashed_password;
  },
  encryptPassword: function(password) {
    if(!password) return '';
    try {
      return crypto
        .createHmac('sha1', this.salt)
        .update(password)
        .digest('hex');
    } catch (err) {
      return '';
    };
  },
  makeSalt: function() {
    return Math.round((new Date().valueOf() * Math.random())) + '';
  },
  generateToken: function(cb) {
    let user = this;
    let token = jwt.sign({ _id: user._id }, config.jwtSecret);
    user.token = token;
    user.save((err, user) => {
      if (err)
        return cb(err);
      return cb (null, user);
    })
  }
}

export default mongoose.model('User', UserSchema);