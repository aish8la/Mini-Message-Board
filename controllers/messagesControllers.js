const messagesQuery = require('../db/messagesQuery');
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
  },
  {
    msgId: crypto.randomUUID(),
    text: "Hey everyone, just wanted to check in and see how the project is going. Have we finalized the design phase yet, or are we still gathering feedback from the team?",
    user: "Sophia",
    added: new Date()
  },
  {
    msgId: crypto.randomUUID(),
    text: "Good morning! I spent most of last night debugging the API calls, and I think the main issue was related to the request headers not being set correctly. Should be fixed now.",
    user: "David",
    added: new Date()
  },
  {
    msgId: crypto.randomUUID(),
    text: "Quick reminder: The client meeting has been rescheduled to Friday at 3 PM. Please update your calendars so we can prepare the presentation in time.",
    user: "Emma",
    added: new Date()
  },
  {
    msgId: crypto.randomUUID(),
    text: "I read through the documentation for the new library we're planning to use. It seems straightforward, but there are some tricky parts when it comes to state management.",
    user: "Liam",
    added: new Date()
  },
  {
    msgId: crypto.randomUUID(),
    text: "Just wanted to share a quick win: The deployment pipeline is now fully automated! No more manual builds or late-night hotfix pushes.",
    user: "Olivia",
    added: new Date()
  }
];

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

function messagesFindByIdGet(req, res) {
  const id = req.params.msgId;
  const message = messages.find(message => message.msgId === id);
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