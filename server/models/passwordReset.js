import mongoose from 'mongoose';

import findOrCreate from 'mongoose-findorcreate';

const ResetPassSchema = new mongoose.Schema({
  userId: {
    type:  mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  token: {
    hash: String,
    expired: {
      type: Boolean,
      default: false,
    },
  },
});

ResetPassSchema.plugin(findOrCreate);

export default mongoose.model('PasswordReset', ResetPassSchema);