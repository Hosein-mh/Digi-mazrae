/*** Documentation:

 * To make this token a one-time-use token, I encourage you to
 * use the user’s current password hash in conjunction with
 * the user’s created date (in ticks) as the secret key to
 * generate the JWT. This helps to ensure that if the user’s
 * password was the target of a previous attack (on an unrelated website),
 * then the user’s created date will make the secret key unique
 * from the potentially leaked password.

 * With the combination of the user’s password hash and created date,
 * the JWT will become a one-time-use token, because once the user
 * has changed their password, it will generate a new password hash
 * invalidating the secret key that references the old password
 * Reference: https://www.smashingmagazine.com/2017/11/safe-password-resets-with-json-web-tokens/
 **/

import jwt from 'jsonwebtoken';
import User from '../models/user.model';
import PasswordReset from '../models/passwordReset';
import nodemailer from 'nodemailer';
import config from '../../config/config';
import passwordReset from '../models/passwordReset';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.LOGIN_EMAIL,
    pass: config.LOGIN_PASSWORD,
  },
});

const getPasswordResetUrl = (user, token) => 
  `http://localhost:3000/password/reset/${user._id}/${token}`;

const resetPasswordTemplate = (user, url) => {
  const from = config.LOGIN_EMAIL
  const to = user.email
  const subject = "🌻 بازیابی رمز عبور دیجی مزرعه 🌻"
  const html = `
  <p>سلام ${user.displayName || user.email},</p>
  <p>متوجه شدیم که رمز عبورت رو فرارموش کردی!</p>
  <p>اما نگران نباش، میتونی از طریق لینک زیر رمز عبورت رو دوباره ست کنی</p>
  <a href=${url}>${url}</a>
  <p>اگه تا یک ساعت دیگه از این لینک استفاده نکنی اتومات منقضی میشه</p>
  <p>دوستانت در دیجی مزرعه</p>
  `

  return { from, to, subject, html };
};

const useHashedPasswordToMakeToken = ({
  hashed_password,
  _id: userID,
  createdAt,
}) => {
  const secret = hashed_password + '-' + createdAt;
  const token = jwt.sign({ userID }, secret, {
    expiresIn: 3600 // 1 hour
  })
  return token;
};

const sendPasswordResetEmail = async (req, res) => {
  const { email } = req.params;
  let user;
  try {
    user = await User.findOne({ email }).exec();
    if (user) {
      const token = useHashedPasswordToMakeToken(user);
      const url = getPasswordResetUrl(user, token);
      const emailTemplate = resetPasswordTemplate(user, url);

      await PasswordReset.findOrCreate({ userId: user._id }, (err, passwordReset, crated) => {
        if (err) {
          return res.status(400).json({
            error: 'مشکل در ارتباط با پایگاه داده',
          });
        }
        passwordReset.token.hash = token;
        passwordReset.token.expired= false;
        passwordReset.save();
      });

      const sendMail = () => {
        transporter.sendMail(emailTemplate, (err, info) => {
          if (err) {
            return res.status(500).json({
              error: 'مشکلی در ارسال ایمیل',
              message: err
            });
          };
          return res.status(200).json({
            message: 'ایمیلی به آدرس ایمیل شما ارسال شد، از طریق لینک ارسالی اقدام نمایید'
          });
        })
      }
      sendMail();
    } else {
      res.status(404).json({
        message: 'کاربری با این ایمیل وجود ندارد'
      })
    }
  } catch (e) {
    return res.status(404).json('مشکلی در ایجاد و ارسال لینک تغییر پسورد')
  };
}

const recieveNewPassword = async (req, res) => {
  const { userId, token } = req.params;
  let { password } = req.body;
  
  try {
    let passwordReset = await PasswordReset.findOne({ userId });
    if (passwordReset.token.expired)
      return res.status(403).json({
        error: 'لینک ارسالی منقضی شده است',
      });
    if (!passwordReset.token.expired && passwordReset.token.hash === token) {
      let user = await User.findOne({ _id: userId });
      if (! user) 
        return res.status(400).json({
          error: 'کاربری یافت نشد',
        });
      // Expires token then the link can use just once
      passwordReset.token.expired = true;
      await passwordReset.save();

      const secret = user.hashed_password + '-' + user.created;
      const payload = jwt.decode(token, secret);

      if (payload.userID == user._id) {
        const hash = user.encryptPassword(password);
        user.hashed_password = hash;
        await user.save();
        return res.status(200).json({
          message: 'پسورد جدید با موفقیت تنظیم شد، لطفا از قسمت ورود وارد شوید',
        });
      } else {
        return res.status(400).json({error: 'اطلاعات وارد شده معتبر نیست'});
      };
    }
    return res.status(202).json({
      error: 'توکن وارد شده همخوانی ندارد'
    })
  } catch (error) {
    return res.status(404).json({
      error,
    });
  };
}

export default {
  transporter,
  sendPasswordResetEmail,
  recieveNewPassword,
};