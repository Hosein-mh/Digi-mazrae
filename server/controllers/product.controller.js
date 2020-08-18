import Product from '../models/product.model';
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

const getPhotoPath = (file) => {
  let pathToArr = file.path.split('\\');
  let photoName = pathToArr[pathToArr.length - 1];
  const photoPath = `${file.destination}/${photoName}`;
  return photoPath;
};

export const productById = async (req, res, next, id) => {
  try {
    let product = await Product.findById(id);
    if (!product) {
      return res.status(401).json({
        error: 'محصولی با این مشخصات یافت نشد!'
      });
    }
    req.product = product;
    next();
  } catch (error) {
    return res.status(400).json({
      error: 'مشکل دریافت اطلاعات محصول'
    });
  }
}

const create = async (req, res) => {
  // get photo path to store in database:
  let photoPath;
  if (req.file) {
    photoPath = getPhotoPath(req.file);
    console.log('phot path is:', photoPath);
  } else {
    photoPath = 'public/img/defaults/product.jpg';
  };
  
  const { name, price, category, tank, description } = req.body;
  let newProduct = new Product({
    name,
    price,
    category,
    tank,
    description,
    createdBy: req.profile,
    photo: photoPath,
  });

  try {
    let product = await newProduct.save();
    res.status(200).json({
      message: 'محصول با موفقیت اضافه شد.',
      data: product,
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
  if (req.product) {
    return res.status(200).json({
      category: req.product,
    });
  }
  return res.status(400).json({
    error: 'محصول مورد نظر یافت نشد!',
  });
};

const updateProduct = async (req, res) => {
  const product = req.product;
  const { photo: pastPhotoPath } = product;
  let photoPath;
  if (req.file) {
    photoPath = getPhotoPath(req.file);
  } else {
    photoPath = req.body.photo;
  };

  const { name, price, category, tank, description } = req.body;
  try {
    product.name = name;
    product.price = price;
    product.category = category;
    product.tank = tank;
    product.description = description;
    product.photo = photoPath;
    product.updated = Date.now();
    product.updatedBy = req.profile._id;

    await product.save();
    fs.unlink(pastPhotoPath, (err) => {
    })
    return res.status(200).json({
      message: 'محصول با موفقیت آپدیت شد!'
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

export const deleteProduct = async (req, res) => {
  try {
    const { product } = req;
    const { photo } = product;
    let resp = await product.delete();
    fs.unlink(photo, (err)=>{});
    return res.status(200).json({
      message: `محصول ${resp.name} با موفقیت پاک شد`,
    })
  } catch (error) {
    return res.status(400).json({
      error,
    });
  }
};


export default {
  productById,
  create,
  list,
  read,
  updateProduct,
  deleteProduct,
}