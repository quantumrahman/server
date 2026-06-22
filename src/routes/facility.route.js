import { Router } from 'express';

import {
    facilityCreate,
    facilityDetails,
    facilitiesAll,
    facilityUpdate,
    facilityDelete,
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

facilityRoute.delete('/facilities/:id', facilityDelete);

export default facilityRoute;
