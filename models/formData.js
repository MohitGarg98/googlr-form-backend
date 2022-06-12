const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
    formHeading: String,
    formData: Object
})

const FormDataSchema = new mongoose.model('FormData', formDataSchema);

module.exports = FormDataSchema;
