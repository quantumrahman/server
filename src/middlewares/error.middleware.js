/* eslint-disable no-unused-vars */

import { ZodError } from 'zod';

const errorMiddleware = (err, req, res, next) => {
    let statusCode = err.statusCode || 500;
    let message = err.message || 'Internal server error';
    let errors = [];

    if (err instanceof ZodError) {
        statusCode = 400;
        message = 'Validation failed';

        errors = err.issues.map(issue => ({
            field: issue.path.join('.'),
            message: issue.message,
        }));
    }

    return res.status(statusCode).json({
        success: false,
        message: message,
        errors: errors,
    });
};

export default errorMiddleware;
