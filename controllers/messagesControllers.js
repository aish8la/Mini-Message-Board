const messagesQuery = require('../db/messagesQuery');
const formatDate = require("../utils/formatDate");

async function allMessagesGet(req, res) {
  const messages = await messagesQuery.getAllMessages();
  res.render('layout', { title: 'Message Board', page: 'index', messages: messages, formatDate: formatDate });
}

function messagesCreateGet(req, res) {
  res.render('layout', { title: 'Create New Message', page: 'newMessageForm' });
}

async function messagesCreatePost(req, res) {
  const message = req.body;
  await messagesQuery.createNewMessage( message.name, message.message);
  res.redirect('/');
}

async function messagesFindByIdGet(req, res) {
  const id = req.params.msgId;
  const message = await messagesQuery.getMessageById(id);
  if (!message) {
    const error = new Error('Oops! The page you are looking for does not exist. It might have been moved or deleted.');
    error.statusCode = 404;
    throw  error;
  }
  res.render('layout', { page: 'message', message: message, formatDate: formatDate });
}

module.exports = {
  allMessagesGet,
  messagesCreateGet,
  messagesCreatePost,
  messagesFindByIdGet,
};