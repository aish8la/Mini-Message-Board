require('dotenv').config();
const path = require('node:path');
const messagesRouter = require('./routes/messagesRouter');
const errorMiddleware = require('./controllers/errorMiddleware');

const express = require('express');
const app = express();

const PORT = process.env.PORT;

/* Set the template engine to EJS */

app.set('view engine', 'ejs');

/* Set the root views path for views */
app.set('views', path.join(__dirname, 'views'));

/* Set static asset paths */
const assestPath = path.join(__dirname, 'public');
app.use(express.static(assestPath));

/* Set express middleware to parse requests with URLEncoded payloads */
app.use(express.urlencoded({ extended: true }));

/* Routes */
app.use('/', messagesRouter);

app.use(errorMiddleware);

app.listen(PORT, (err) => {
    if(err) throw err;
    console.log(`Server started on Port: ${PORT}`);
});