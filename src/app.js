import express from 'express';

import facilityRoute from './routes/facility.route.js';

import errorMiddleware from './middlewares/error.middleware.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) =>
    res.status(200).json({ success: true, message: 'server working properly' })
);

app.use('/api/v1', facilityRoute);

app.use(errorMiddleware);

export default app;
