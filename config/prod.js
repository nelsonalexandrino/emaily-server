//prod.js - production keys 

module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoURI: process.env.MONGO_URI,
    username: process.env.DB_USERNAME,
    password: process.env.DB_USER_PASSWORD,
    cookieKey: process.env.COOKIE_KEY
};