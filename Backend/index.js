const { mongoURI } = require('./security.js');
const mongoose = require('mongoose'); // Import Mongoose
const express = require('express'); // Express Default Setting
const app = express(); // Express Default Setting
const PORT = 3000; // Express Default Setting

app.get('/', (req, res) => {
    res.send('Hello World');
});

mongoose.connect(mongoURI).then(() => {
    console.log('Connected MongoDB');
}).catch((error) => {
    console.log('Fail to Connect MongoDB', error);
}); // Connect MongoDB

app.listen(PORT, () => {
    console.log('Server is Runnig!');
});