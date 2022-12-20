const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');

const path = require('path');
const mongoose = require('mongoose')

// Routes Declaration start here
const UserRoutes = require('./Routes/Users');
const ProjectRoutes = require('./Routes/Project');
const VoiceRoutes = require('./Routes/Voice');
const RecordingRoutes = require('./Routes/Recording');
const ClipRoutes = require('./Routes/Clip');
// Routes Declaration end here

app.use(express.static(path.join(__dirname + '/public')))
app.use(express.json());
app.use(cors());
dotenv.config();


// Routes usage start here
app.use('/Resemble_AI/User/', UserRoutes);
app.use('/Resemble_AI/Project/', ProjectRoutes);
app.use('/Resemble_AI/Voice/', VoiceRoutes);
app.use('/Resemble_AI/RecordingRoutes/', RecordingRoutes);
app.use('/Resemble_AI/Clip/', ClipRoutes);
// Routes usage start here

const port = process.env.PORT;


// Database Connectivity start here
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODB_URL)
    .then((res) => console.log(`Mongo Database Connected Successfully`))
    .catch((err) => console.log(`Mongo Database Not Connected`))


// Database Connectivity end here

app.listen(port, () => {
    console.log(`Your Server is running on ${port} port`)
})