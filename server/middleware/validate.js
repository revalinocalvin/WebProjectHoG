const { body, validationResult } = require('express-validator');

const validateBooking = [
    body('computerId').notEmpty().withMessage('Computer ID is required'),
    body('packageId').notEmpty().withMessage('Package is required'),
    body('date').isISO8601().withMessage('Date must be a valid date'),
];

const validateResults = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = {
    validateBooking,
    validateResults,
};