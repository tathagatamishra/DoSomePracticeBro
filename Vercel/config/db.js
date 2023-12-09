const mongoose = require("mongoose")

const DB = process.env.MONGODB_URI

mongoose.connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(() => console.log("DataBase Connected"))
    .catch((error) => { console.log(`MongoDB connection error: ${error}`) })