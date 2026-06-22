import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) =>
    res.status(200).json({ success: true, message: 'server working properly' })
);

export default app;
