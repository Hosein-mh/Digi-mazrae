import multer from 'multer';

const getMulterStorage = fieldName => {
  return multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, `public/img/${fieldName}`);
    },
    filename: (req, file, cb) => {
      const ext = file.mimetype.split('/')[1];
      cb(null, `${file.originalname}-${Date.now()}.${ext}`);
    }
  });
}

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb('پسوند فایل انتخابی از پسوند تصاویر نیست.', false);
  };
};

export const getUpload = (fieldName) => {
  const upload = multer({
    storage: getMulterStorage(fieldName),
    fileFilter: multerFilter,
    limits: { fileSize: 1024 * 1024 * 3 }, //3 MB limits
    
  });
  return upload;
}
