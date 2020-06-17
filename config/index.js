module.exports = {
    PORT: process.env.PORT || 5000,

    FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:4200',
    MONGO_URI: "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false"

};
