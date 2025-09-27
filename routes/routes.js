const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
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

module.exports = {
  serveIndexPage: serveIndexPage,
  goToNewMessageForm: goToNewMessageForm
};