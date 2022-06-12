const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(express.urlencoded({ extended: false }));

mongoose.connect("mongodb://localhost:27017/google_form_db", {useNewUrlParser: true});

app.use('/', require('./routes'));

app.listen(8000, function (err) {
    if(err){console.log(err); return}
    else{
        console.log('Server runnning on port 8000');
    }
})