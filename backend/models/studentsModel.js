
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const studentSchema = new Schema({
   firstname: { 
      type: String,
      required:true,
    },
   lastname:{
      type:String,
      required:true,
   },
   grade: { type: String },
   present: { type: Boolean },
}, { timestamps: true })

const Student = mongoose.model('students', studentSchema)

module.exports = Student