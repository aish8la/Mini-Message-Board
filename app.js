require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT;

app.listen(PORT, (err) => {
    if(err) throw err;
    console.log(`Server started on Port: ${PORT}`);
});