const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const mongoose = require('mongoose')
const fs = require('fs')
const options = {
    key:fs.readFileSync('./home2/apimyprojectstag/ssl/keys/bbc29_85873_5242d91a6635bc5edf93d1857ce09cbd.key'),
    cert: fs.readFileSync('./home2/apimyprojectstag/ssl/certs/api_myprojectstaging_com_bbc29_85873_1678147199_fbbbb25d1881833303385f8999769e5c.crt'),
};

const server = require('https').createServer(options,app)
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



server.listen(port, () => {
    console.log(`Resemble AI Server is running on ${port} port`)
})