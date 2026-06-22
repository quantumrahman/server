import FacilityModel from '../models/facility.model.js';
import AppError from '../utils/app.error.js';

export const createFacility = async payload => {
    const facilityExists = await FacilityModel.findOne({ name: payload.name });

    if (facilityExists) {
        throw new AppError(400, 'Facility already exists');
    }

    const dataObj = {
        ...payload,
        image: 'upcoming',
    };

    const facility = await FacilityModel.create(dataObj);

    return facility;
};

export const detailsFacility = async facilityId => {
    const facility = await FacilityModel.findById(facilityId).lean();

    if (!facility) {
        throw new AppError(404, 'Facility not found');
    }

    return facility;
};
