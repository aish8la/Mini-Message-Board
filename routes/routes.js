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
  res.render('layout', { title: 'Mini Message Board', page: 'index', messages: messages });
}

const goToNewMessageForm = (req, res) => {
  res.render('newMessageForm', { title: 'New Message', page: 'newMessageForm' });
}

const createNewMessage = (req, res) => {
  const message = req.body;
  messages.push({ msgId: crypto.randomUUID(), text: message.message, user: message.name, added: new Date() });
  res.redirect('/');
}

const getMessageById = (req, res) => {
  const id = req.params.msgId;
  const message = messages.find(message => message.msgId === id);
  res.render('message', { title: 'Message', page: 'message', message: message});
}

module.exports = {
  serveIndexPage: serveIndexPage,
  goToNewMessageForm: goToNewMessageForm,
  createNewMessage: createNewMessage,
  getMessageById: getMessageById
};