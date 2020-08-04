import User from '../models/user.model';
import extend from 'lodash/extend';
import errorHandler from './../helpers/dbErrorHandler';
import config from './../../config/config';
import dbErrorHandler from './../helpers/dbErrorHandler';
import passport from '../passport';

const create = (req, res, next) => {
  passport.authenticate('local-signup', (error, user, info) => {
    if (error) {
      return res.status(400).json({
        error
      });
    };

    if (user)
      return res.status(200).json({
        message: "اکانت با موفقیت ایجاد شد! لطفا signin کنید"
      })
  })(req, res, next);
}

// Load user and append to req.
const userById = async (req, res, next, id) => {
  try {
    let user = await User.findById(id);
    if (!user) {
      return res.status('400').json({
        error: "کاربری با این مشخصات یافت نشد"
      });
    }
    user.salt = undefined;
    user.hashed_password = undefined;
    req.profile = user;
    next();
  } catch (err) {
    return res.status('400').json({
      error: 'اطلاعات کاربر برگشت داده نشد'
    });
  };
};

const userByToken = async (req, res) => {
  const { googleToken } = req.body;
  const user = await User.findOne({ 'token' : googleToken }).select('name email token admin');
  if (!user)
    return res.status(401).json({
      error: 'توکن وارد شده معتبر نیست',
    });
  return res.status(200).json({
    ...user.toJSON(),
  });
}

const list = async (req, res) => {
  try {
    let users = await User.find().select('name email updated created admin');
    res.json(users);
  } catch (err) {
    res.status('400').json({
      error: errorHandler.getErrorMessage(err)
    });
  }
}

const read = (req, res) => {
  req.profile.hashed_password = undefined;
  req.profile.salt = undefined;
  return res.json(req.profile);
}

const update = async (req, rers) => {
  try {
    let user = req.profile;
    user = extend(user, req.body);
    user.updated = Date.now();
    await user.save();
    user.hashed_password = undefined;
    user.salt = undefined;
    res.json(user);
  } catch (err) {
    res.status('400').json({
      error: dbErrorHandler.getErrorMessage(err)
    });
  }
}

const isAdmin = async (req, res, next) => {
  const isAdmin = req.profile && req.profile.admin;
  if (!isAdmin) {
    return res.status('403').json({
      error: 'شما اجازه دسترسی ندارید'
    });
  }
  next();
}

// // only admin can remove users
// const remove = async (req, res) {
//   try {
//     let user = await user.findById(req.)
//   } catch (err) {
  
//   }
// }

export default {
  create, 
  userById,
  userByToken,
  read,
  list,
  update,
  isAdmin,
}