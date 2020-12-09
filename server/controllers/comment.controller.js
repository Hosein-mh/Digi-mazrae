import Comment from '../models/comment.model';
import dbErrorHandler from '../helpers/dbErrorHandler';


export const commentById = async (req, res, next, id) => {
  try {
    let comment = await Comment.findById(id);
    if (!comment) {
      return res.status(401).json({
        error: 'نظری با این مشخصات یافت نشد!'
      })
    }
    req.comment = comment;
    next();
  } catch (error) {
    return res.status(400).json({
      error: 'مشکل دریافت اطلاعات comment'
    })
  }
}

const create = async (req, res) => {  
  const { title, strengthPoints, leakPoints, text, nutritionalRate, freshRate, packingRate, qualityRate } = req.body;
  let newComment = new Comment({
    title,
    strengthPoints,
    leakPoints,
    text,
    nutritionalRate,
    freshRate,
    packingRate,
    qualityRate,
    createdBy: req.profile,
    product: req.product,
  });

  try {
    let comment = await newComment.save();
    res.status(200).json({
      message: 'نظر شما با موفقیت ثبت شد و پس از تایید ادمین روی سایت به نمایش گداشته می شود',
      data: comment,
    });
  } catch (e) {
    res.status(500).json({
      error: dbErrorHandler.getErrorMessage(e),
    });
  }
};

const list = async (req, res)  => {
  const { page } = req.query;
  let limit = 10;
  if (page == undefined ) 
    limit = 20;
  const query = {};
  const options = {
    page,
    sort: { created: -1 },
    limit,
  }
  try {
    let result = await Comment.paginate(query, options);
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
  if (req.comment) {
    return res.status(200).json({
      comment: req.comment,
    });
  }
  return res.status(400).json({
    error: 'کامنت مورد نظر یافت نشد!',
  });
};

const updateComment = async (req, res) => {
  const comment = req.comment;
  // const { title, text } = comment;

  const { title, text, accepted } = req.body;

  try {
    comment.title = title;
    comment.text = text;
    comment.accepted = accepted;
    comment.updated = Date.now();
    comment.updatedBy = req.profile._id;

    await comment.save();
    return res.status(200).json({
      message: 'نظر آپدیت شد!'
    })
  } catch (error) {
    res.status(500).json({
      error: dbErrorHandler.getErrorMessage(e),
    });
  }
}

export const deleteComment = async (req, res) => {
  try {
    const { comment } = req;
    let resp = await comment.delete();
    return res.status(200).json({
      message: `کامنت ${resp.title} با موفقیت پاک شد`,
    })
  } catch (error) {
    return res.status(400).json({
      error,
    });
  }
};


export default {
  commentById,
  create,
  list,
  read,
  updateComment,
  deleteComment,
}