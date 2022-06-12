const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    formHeading: String,
    questions: Array,
    queTypeValue: String
})

const FormSchema = new mongoose.model('Form', formSchema);

module.exports = FormSchema;