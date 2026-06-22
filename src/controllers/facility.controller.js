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

export const facilityUpdate = async (req, res, next) => {
    try {
        const facility = await FacilityService.updateFacility(
            req.params.id,
            req.body
        );

        return res.status(201).json({
            success: true,
            message: 'Facility update successfully',
            data: facility,
        });
    } catch (error) {
        next(error);
    }
};

export const facilityDelete = async (req, res, next) => {
    try {
        const facility = await FacilityService.deleteFacility(req.params.id);

        return res.status(200).json({
            success: true,
            message: 'Facility delete successfully',
            data: facility,
        });
    } catch (error) {
        next(error);
    }
};
