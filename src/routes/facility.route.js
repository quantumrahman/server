import { Router } from 'express';

import {
    facilityCreate,
    facilityDetails,
} from '../controllers/facility.controller.js';

import validateMiddleware from '../middlewares/validate.middleware.js';
import validateSchema from '../validators/facility.validate.js';

const facilityRoute = Router();

facilityRoute.get('/facilities', (req, res) =>
    res.status(200).json({ success: true, message: 'GET -> All Facility' })
);

facilityRoute.get('/facilities/:id', facilityDetails);

facilityRoute.post(
    '/facilities',
    validateMiddleware(validateSchema),
    facilityCreate
);

facilityRoute.patch('/facilities/:id', (req, res) =>
    res.status(200).json({ success: true, message: 'PATCH -> Update facility' })
);

facilityRoute.delete('/facilities/:id', (req, res) =>
    res
        .status(200)
        .json({ success: true, message: 'DELETE -> Delete facility' })
);

export default facilityRoute;
