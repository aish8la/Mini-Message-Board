require('dotenv').config();
const path = require('node:path');

const express = require('express');
const app = express();

const PORT = process.env.PORT;

/* Set the template engine to EJS */

app.set('view engine', 'ejs');

/* Set the root views path for views */
app.set('views', path.join(__dirname, 'views'));

app.listen(PORT, (err) => {
    if(err) throw err;
    console.log(`Server started on Port: ${PORT}`);
});