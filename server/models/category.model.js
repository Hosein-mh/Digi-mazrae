import mongoose, { Schema } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

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

CategorySchema.plugin(mongoosePaginate);

export default mongoose.model('Category', CategorySchema);