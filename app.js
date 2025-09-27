require('dotenv').config();
const path = require('node:path');

const indexRoute = require('./routes/routes');

const express = require('express');
const app = express();

const PORT = process.env.PORT;

/* Set the template engine to EJS */

app.set('view engine', 'ejs');

/* Set the root views path for views */
app.set('views', path.join(__dirname, 'views'));

/* Set express middleware to parse requests with URLEncoded payloads */
app.use(express.urlencoded({ extended: true }));

/* Routes */
app.get('/new', indexRoute.goToNewMessageForm);
app.get('/:msgId', indexRoute.getMessageById);
app.get('/', indexRoute.serveIndexPage);

app.post('/new', indexRoute.createNewMessage);

app.use(indexRoute.errorPage);

app.listen(PORT, (err) => {
    if(err) throw err;
    console.log(`Server started on Port: ${PORT}`);
});