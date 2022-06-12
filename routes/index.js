const express = require('express');
const FormSchema = require('../models/allForms');
const FormData = require('../models/formData')

const router = express.Router();
router.post('/all-forms', async function (req, res) {
    const newForm = new FormSchema(req.body);
    const formData = await newForm.save();
    res.json({ message: "Record saved successfully", data: formData })
});

router.get('/all-forms', async function (req, res) {
    const formData = await FormSchema.find();
    res.json(formData)
});

router.post('/save-form-data', async function (req, res) {
    const newFormData = new FormData(req.body);
    const formData = await newFormData.save();
    res.json({ message: "Record saved successfully", data: formData })
});

module.exports = router;