const { param, body, validationResult } = require('express-validator');

const validateMessage = [
    body("name")
        .trim()
        .escape()
        .notEmpty().withMessage("Name cannot be empty")
        .isLength({min: 1, max: 15}).withMessage("Username must be between 1 and 15 characters long"),
    body("message")
        .trim()
        .escape()
        .notEmpty().withMessage("Message cannot be empty")
        .isLength({min: 1, max: 200}).withMessage("Message should be between 1 and 200 characters long"),
    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.render("layout", { title: 'Create New Message', page: 'newMessageForm', formError: errors.array() });
        }
        next()
    }
];

const validateID = [
    param("msgId")
        .isInt().withMessage("Is invalid message id"),
    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            const error = new Error('Oops! The page you are looking for does not exist. It might have been moved or deleted.');
            error.statusCode = 404;
            throw error;
        }
        next();
    }
];

module.exports = {
    validateMessage,
    validateID,
}