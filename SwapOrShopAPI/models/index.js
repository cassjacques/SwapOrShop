const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_URI;

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected successfully'))
    .catch((err) => console.log(err))

module.exports = {
    Fit: require('./Fit'),
    SOS: require('./SOS'),
    User: require('./User'),
}