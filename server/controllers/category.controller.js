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
};

export const categoryById = async (req, res, next, id) => {
  try {
    let category = await Category.findById(id);
    if (!category) {
      return res.status(401).json({
        error: 'کتگوری با این مشخصات یافت نشد!'
      })
    }
    req.category = category;
    next();
  } catch (error) {
    return res.status(400).json({
      error: 'مشکل دریافت اطلاعات کتگوری'
    })
  }
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

const list = async (req, res)  => {
  const { page } = req.query;
  const query = {};
  const options = {
    page,
    sort: { created: -1 },
    limit: 5,
  }
  try {
    let result = await Category.paginate(query, options);
    return res.status(200).json({
      data: result
    })
  } catch (e) {
    return resp.status(400).json({
      error: dbErrorHandler.getErrorMessage(e),
    });
  }
}

export const deleteCategory = async (req, res) => {
  try {
    const { category } = req;
    let resp = await category.delete();
    return res.status(200).json({
      message: `کتگوری ${resp.name} با موفقیت پاک شد`,
    })
  } catch (error) {
    return res.status(400).json({
      error,
    });
  }
};


export default {
  categoryById,
  create,
  list,
  deleteCategory,
}