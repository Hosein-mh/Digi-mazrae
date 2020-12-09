import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

const CommentSchema = new mongoose.Schema({
  title: String,
  strengthPoints: String,
  leakPoints: String,
  text: {
    type: String,
    required: "ورد کردن متن پیام الزامی است.",
  },
  nutritionalRate: { type: Number, min: 1, max:5 },
  freshRate: { type: Number, min: 1, max:5 },
  packingRate: { type: Number, min: 1, max:5 },
  qualityRate: { type: Number, min: 1, max:5 },
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: "کاربر نویسنده پیام مشخص نشده!",
  },
  product: {
    type: mongoose.Schema.ObjectId,
    ref: 'Product',
    required: "محصولی برای پیام مشخص نشده!",
  },
  accepted: {
    type: Boolean,
    default: false,
  },
  created: {
    type: Date,
    default: Date.now
  },
  updated: Date,
});

CategorySchema.plugin(mongoosePaginate);

export default mongoose.model('Comment', CommentSchema);