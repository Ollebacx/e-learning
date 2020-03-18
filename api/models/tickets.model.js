const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
comment: String,
lessons: [{
  type: mongoose.Schema.Types.ObjectId,
  ref: `lessons`
}]
})

module.exports = ticketSchema
















