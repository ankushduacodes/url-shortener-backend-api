const mongoose = require('mongoose');

const { Schema } = mongoose;

const urlSchema = new Schema({
  url: {
    type: String,
    matches: /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/,
    required: true,
    trim: true,
  },
  uniqueId: {
    type: String,
    required: true,
  },
  timeGenerated: {
    type: Date,
    required: true,
  },
});

module.exports = urlSchema;
