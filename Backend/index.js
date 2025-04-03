const { mongoURI } = require('./security.js');
const mongoose = require('mongoose'); // Import Mongoose
const express = require('express'); // Express Default Setting
const app = express(); // Express Default Setting
const PORT = 3000; // Express Default Setting

const userRoutes = require('./routes/user.js'); // Ch4-4.괸리자 계정 생성하기 13분 52초

app.use('/api/auth', userRoutes);

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