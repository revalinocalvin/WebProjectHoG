const { body, validationResult } = require('express-validator');

const validateBooking = [
    body('computerId').isNumeric().withMessage('Computer ID must be a number'), // Assuming computerId is a number
    body('package').notEmpty().withMessage('Package is required'),
    body('date').isISO8601().withMessage('Date must be a valid date'),
    body('startTime').isISO8601().withMessage('Start time must be a valid ISO 8601 date string').custom((value, { req }) => {
        const date = req.body.date; // Get the date from the request
        const startDateTime = new Date(value);
        const expectedStartDateTime = new Date(`${date}T${value.split('T')[1]}`); // Ensure the date part matches
        
        if (isNaN(startDateTime.getTime())) {
            throw new Error('Start time must be a valid time');
        }
        if (startDateTime < expectedStartDateTime) {
            throw new Error('Start time must be on the same date as the provided date');
        }
        
        req.startDateTime = startDateTime; // Store the Date object for later use
        return true; // Pass validation
    }),
    body('endTime').isISO8601().withMessage('End time must be a valid ISO 8601 date string').custom((value, { req }) => {
        const endDateTime = new Date(value);
        
        if (isNaN(endDateTime.getTime())) {
            throw new Error('End time must be a valid time');
        }
        if (endDateTime <= req.startDateTime) {
            throw new Error('End time must be later than start time');
        }
        
        req.endDateTime = endDateTime; // Store the Date object for later use
        return true; // Pass validation
    }),
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
