const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
// const dotenv = require('dotenv')
// dotenv.config();
require('dotenv').config({ debug: false });
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname));
app.use('/', require('./routes/userRoutes'));



// Making Mongo Connection 
mongoose.set('strictQuery', false);
mongoose.Promise = global.Promise;


if (!process.env.MONGO_URL) {
    throw new Error('MONGO_URL is not defined in .env')
}

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('MongoDB Connected Successfully');
        console.log("Data Base:", mongoose.connection.name)
    })
    .catch(err => {
        console.log("DB Connection error:", err.message)
        process.exit(1);
    })
// Server making and taking connection

const PORT = process.env.PORT || 3000
// app.get('/', (req, res) => {
//     res.send('Server is up and Running');
// });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})