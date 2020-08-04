import Category from '../models/category.model';
import fs from 'fs';
import dbErrorHandler from '../helpers/dbErrorHandler';
import { getUpload } from '../helpers/multer';
import multer from 'multer';

export const multerMiddleware = (req, res, next) => {
  const upload = getUpload('categories').single('photo');
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
      return res.status(403).json({
        error: err.message,
      })
    } else if (err) {
      // An unknown error occurred when uploading.
      return res.status(402).json({
        error: err,
      });
    };
    next();
  });
}
const create = async (req, res) => {
  // get photo path to store in database:
  let photoPath;
  if (req.file) {
    let pathToArr = req.file.path.split('\\');
    let photoName = pathToArr[pathToArr.length - 1];
    photoPath = `${req.file.destination}/${photoName}`;
  } else {
    photoPath = 'publick/img/categories/default.jpeg';
  };
  
  const { name, description } = req.body;
  let newCategory = new Category({
    name,
    description,
    createdBy: req.profile,
    photo: photoPath,
  });

  try {
    let category = await newCategory.save();
    res.status(200).json({
      message: 'دسته بندی با موفقیت ایجاد شد.',
      data: category,
    });
  } catch (e) {
    if (req.file) {
      fs.unlink(photoPath, (err) => {
      });
    }
    res.status(500).json({
      error: dbErrorHandler.getErrorMessage(e),
    });
  }
};

export default {
  create,
}