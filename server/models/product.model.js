import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

const ProductSchema = mongoose.Schema({
  name: { 
    type: String, 
    required: 'نام محصول وارد نشده',
    trim: true,
  },
  description: String,
  price: {
    type: Number,
    required: 'قیمت محصول وارد نشده'
  },
  tank: {
    type: String,
    required: 'وارد کردن موجودی انبار الزامیست.'
  },
  photo: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: 'باید یک کتگوری انتخاب کنید' },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  created: { type: Date, default: Date.now },
  updated: Date,
});

ProductSchema.plugin(mongoosePaginate);

export default mongoose.model('Product', ProductSchema);
