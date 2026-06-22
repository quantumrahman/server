import { z } from 'zod';

const facilityValidateSchema = z.object({
    name: z
        .string('Name is required')
        .min(1, 'Name is required')
        .nonempty('Name cannot be empty or whitespace')
        .trim(),
    facility_type: z
        .string('Facility type is required')
        .min(1, 'Facility type is required')
        .nonempty('Facility type cannot be empty or whitespace')
        .trim(),
    location: z
        .string('Location is required')
        .min(1, 'Location is rquired')
        .nonempty('Location cannot be empty')
        .trim(),
    price_per_hour: z.coerce
        .number('Price per hour is required')
        .min(0, 'Price per hour is required')
        .positive('Price per hour cannot be negative'),
    capacity: z.coerce
        .number('Capacity is required')
        .min(1, 'Capacity is required')
        .positive('Capacity cannot be negative'),
    available_slots: z
        .array(z.string('Available time slots is required'))
        .min(1, 'Available time slots is required')
        .nonempty('Available time slots cannot be empty'),
    description: z
        .string('Description is required')
        .min(1, 'Description is required')
        .nonempty('Description is required')
        .trim(),
    owner_email: z
        .email('Please provide a valid email address')
        .min(1, 'Owner email is required')
        .nonempty('Owner email cannot be empty')
        .trim()
        .lowercase(),
});

export default facilityValidateSchema;
