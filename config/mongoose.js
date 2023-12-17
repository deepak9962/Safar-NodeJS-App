const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/safar');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error Connecting to MongoDB"));
db.once('open', function() {
    console.log('connectd to db');
})

module.exports = db;