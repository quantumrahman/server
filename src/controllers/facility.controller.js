import * as FacilityService from '../services/facility.services.js';

export const facilityCreate = async (req, res, next) => {
    try {
        const facility = await FacilityService.createFacility(req.body);

        return res.status(201).json({
            success: true,
            message: 'Facility create successfully',
            data: facility || {},
        });
    } catch (error) {
        next(error);
    }
};
