const formatDate = require("../utils/formatDate");

const messages = [
  {
    msgId: crypto.randomUUID(),
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    msgId: crypto.randomUUID(),
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

const serveIndexPage = (req, res) => {
  res.render('layout', { title: 'Mini Message Board', page: 'index', messages: messages, formatDate: formatDate });
}

const goToNewMessageForm = (req, res) => {
  res.render('layout', { title: 'New Message', page: 'newMessageForm' });
}

const createNewMessage = (req, res) => {
  const message = req.body;
  messages.push({ msgId: crypto.randomUUID(), text: message.message, user: message.name, added: new Date() });
  res.redirect('/');
}

const getMessageById = (req, res) => {
  const id = req.params.msgId;
  const message = messages.find(message => message.msgId === id);
  if (!message) {
    const error = new Error("Not Found");
    error.statusCode = 404;
    throw  error;
  }
  res.render('layout', { title: 'Message', page: 'message', message: message, formatDate: formatDate });
}

const errorPage = (err, req, res, next) => {
  res.status(err.statusCode || 500);
  res.render('error', { error: err });
}

module.exports = {
  serveIndexPage: serveIndexPage,
  goToNewMessageForm: goToNewMessageForm,
  createNewMessage: createNewMessage,
  getMessageById: getMessageById,
  errorPage: errorPage
};