import { Router } from 'express';

import {
    facilityCreate,
    facilityDetails,
    facilitiesAll,
    facilityUpdate,
} from '../controllers/facility.controller.js';

import validateMiddleware from '../middlewares/validate.middleware.js';
import validateSchema from '../validators/facility.validate.js';

const facilityRoute = Router();

facilityRoute.get('/facilities', facilitiesAll);

facilityRoute.get('/facilities/:id', facilityDetails);

facilityRoute.post(
    '/facilities',
    validateMiddleware(validateSchema),
    facilityCreate
);

facilityRoute.patch(
    '/facilities/:id',
    validateMiddleware(validateSchema.partial()),
    facilityUpdate
);

facilityRoute.delete('/facilities/:id', (req, res) =>
    res
        .status(200)
        .json({ success: true, message: 'DELETE -> Delete facility' })
);

export default facilityRoute;
