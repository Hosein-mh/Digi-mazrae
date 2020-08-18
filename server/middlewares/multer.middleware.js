import { getUpload } from '../helpers/multer';
import multer from 'multer';
import fs from 'fs';
import makeDir from 'make-dir';

export const multerMiddleware = (fieldName) => async (req, res, next) => {
  const isPathExists = fs.existsSync(`/public/img/${fieldName}`);
  const CURRENT_WORKING_DIR = process.cwd();
  if (!isPathExists) {
    const newPath = await makeDir(CURRENT_WORKING_DIR + `/public/img/${fieldName}`);
  }

  const upload = getUpload(fieldName).single('photo');
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