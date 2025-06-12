const mongoose = require('mongoose');

const blacklistTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true
  },
  expiresAt: {
    type: Date,
    required: true
  }
});

// Fix: Use existing model if already defined
module.exports = mongoose.models.BlacklistToken || mongoose.model('BlacklistToken', blacklistTokenSchema);
