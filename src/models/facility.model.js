import mongoose from 'mongoose';

const facilitySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
            trim: true,
        },
        facility_type: {
            type: String,
            required: [true, 'Facility type is required'],
            enum: [
                'Football Turf',
                'Badminton Court',
                'Tennis Court',
                'Basketball Court',
                'Swimming Pool',
            ],
        },
        image: {
            type: String,
            required: [true, 'Image is required'],
            trim: true,
        },
        location: {
            type: String,
            required: [true, 'Location is required'],
        },
        price_per_hour: {
            type: Number,
            required: [true, 'Price per hour is required'],
            min: 0,
        },
        capacity: {
            type: Number,
            required: [true, 'Capacity is required'],
            min: 1,
        },
        available_slots: [
            {
                type: String,
                required: [true, 'Available time slots are required'],
            },
        ],
        description: {
            type: String,
            required: [true, 'Description is required'],
            trim: true,
        },
        owner_email: {
            type: String,
            required: [true, 'Owner email is required'],
            trim: true,
            unique: true,
        },
    },
    { timestamps: true, versionKey: false }
);

const Facility = mongoose.model('Facility', facilitySchema);

export default Facility;
