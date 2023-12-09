const mongoose = require("mongoose");


const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  metaData:{
    type: String,
  },
  url:{
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
    default: 'admin'
  },
  imageUrl: {
    type: String,
    default: "https://th.bing.com/th/id/OIG.BIgLX6.2XMLx4j4GX0q7"
  },
  imageAlt:{
    type: String
  },
  publishDate: {
    type: Date,
    default: Date.now,
  },
  likes: {
    type: Number,
    default: 0,
  }, 
  comments: [
    {
      user: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  commentsCount: {
    type: Number,
    default: 0
  },
  categories: [
    {
      type: String,
      //   required: true,
      default: "Exam",
    },
  ],
  tags: [
    {
      type: String,
      //   required: true,
      default: "Exam",
    },
  ],
  isDelete: {
    type: Boolean,
    default: false
  },

}, {timestamps:true});

module.exports = mongoose.model("Blog", BlogSchema);
