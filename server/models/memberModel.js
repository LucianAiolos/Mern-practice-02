const mongoose = require('mongoose')  // allows use of mongoose
const Schema = mongoose.Schema
// one more

const MemberSchema = new Schema({
  name: String,
  goldStatus: Boolean,
  club: String,
})

module.exports = mongoose.model('Membership', MemberSchema)
// when building a schema/model first time
//------------------------------
//   mongoose.model('this will be the schema/collection name', exporting this schema to use)
