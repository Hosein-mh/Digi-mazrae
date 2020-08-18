import Category from '../models/category.model';
import fs from 'fs';
import dbErrorHandler from '../helpers/dbErrorHandler';


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
    photoPath = 'public/img/defaults/category.jpg';
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

export const read = async (req, res) => {
  if (req.category) {
    return res.status(200).json({
      category: req.category,
    });
  }
  return res.status(400).json({
    error: 'دسته بندی مورد نظر یافت نشد!',
  });
};

const updateCategory = async (req, res) => {
  const category = req.category;
  const { photo: pastPhotoPath } = category;
  let photoPath;
  if (req.file) {
    let pathToArr = req.file.path.split('\\');
    let photoName = pathToArr[pathToArr.length - 1];
    photoPath = `${req.file.destination}/${photoName}`;
  } else {
    photoPath = req.body.photo;
  };

  const { name, description } = req.body;

  try {
    category.name = name;
    category.description = description;
    category.photo = photoPath;
    category.updated = Date.now();
    category.updatedBy = req.profile._id;

    await category.save();
    fs.unlink(pastPhotoPath, (err) => {
    })
    return res.status(200).json({
      message: 'کتگوری آپدیت شد!'
    })
  } catch (error) {
    if (req.file) {
      fs.unlink(photoPath, (err) => {
      });
    }
    res.status(500).json({
      error: dbErrorHandler.getErrorMessage(e),
    });
  }

}

export const deleteCategory = async (req, res) => {
  try {
    const { category } = req;
    const { photo } = category;
    let resp = await category.delete();
    fs.unlink(photo, (err)=>{});
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
  read,
  updateCategory,
  deleteCategory,
}