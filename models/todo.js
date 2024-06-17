const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
 
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  isPinned: {
    type: Boolean,
    default:false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:true,
  },
  createdAt:{
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Todo', TodoSchema);