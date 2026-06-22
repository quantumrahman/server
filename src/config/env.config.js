import 'dotenv/config';

const configure = {
    port: process.env.PORT,
    node_env: process.env.NODE_ENV,

    cloudinary_name: process.env.CLOUDINARY_NAME,
    cloudinary_api_secret: process.env.CLOUDINARY_API_SECRET,
    cloudinary_api_key: process.env.CLOUDINARY_API_KEY,
    cloudinary_url: process.env.CLOUDINARY_URL,
};

const config = Object.freeze(configure);

export default config;
