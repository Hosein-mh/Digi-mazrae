import mongoose, { Schema } from 'mongoose';

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'وارد کردن نام الزامیست',
    unique: 'نام دسته بندی تکراری وارد شده است'
  },
  description: String,
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  UpdatedBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  },
  photo: {
    type: String,
    // required: 'تصویر دسته بندی نمی تواند خالی بماند',
  },
});

export default mongoose.model('Category', CategorySchema);