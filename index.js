import app from './src/app.js';
import config from './src/config/env.config.js';
import dbConnect from './src/database/db.connect.js';

const serverStart = async () => {
    try {
        await dbConnect();

        const port = config.port || 5500;

        app.listen(port, () =>
            console.log(`server running on http://localhost:${port}`)
        );
    } catch (error) {
        console.error('server running problem occurred', error.message);
    }
};

serverStart();
