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

export const facilityDetails = async (req, res, next) => {
    try {
        const facility = await FacilityService.detailsFacility(req.params.id);

        return res.status(200).json({
            success: true,
            message: 'Facility details fetch',
            data: facility,
        });
    } catch (error) {
        next(error);
    }
};

export const facilitiesAll = async (req, res, next) => {
    try {
        const facilities = await FacilityService.allFacilities();

        return res.status(200).json({
            success: true,
            message: 'Facility fetch successfully',
            data: facilities,
        });
    } catch (error) {
        next(error);
    }
};
