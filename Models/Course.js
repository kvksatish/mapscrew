const mongoose = require("mongoose")

const Coursescheme = new mongoose.Schema({
    course: String,
    duration: Number,
    teacher: String,
    mode: String,
    fee: Number,
    email:String
})
const CourseModel = mongoose.model("course", Coursescheme)


module.exports = { CourseModel }