const express = require('express'); // Express Default Setting
const app = express(); // Express Default Setting
const PORT = 3000; // Express Default Setting

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log('Server is Runnig!');
});