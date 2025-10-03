const { Router } = require('express');
const messagesRouter = Router();
const messagesController = require('../controllers/messagesControllers');
const validation = require('../controllers/validation');

messagesRouter.get('/', messagesController.allMessagesGet);
messagesRouter.get('/new', messagesController.messagesCreateGet);
messagesRouter.post('/new', validation.validateMessage, messagesController.messagesCreatePost);
messagesRouter.get('/:msgId', validation.validateID, messagesController.messagesFindByIdGet);

module.exports = messagesRouter;