const { Router } = require('express');
const messagesRouter = Router();
const messagesController = require('../controllers/messagesControllers');

messagesRouter.get('/', messagesController.allMessagesGet);
messagesRouter.get('/new', messagesController.messagesCreateGet);
messagesRouter.post('/new', messagesController.messagesCreatePost);
messagesRouter.get('/:msgId', messagesController.messagesFindByIdGet);

module.exports = messagesRouter;