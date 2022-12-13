const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose')

// Routes Declaration start here
const UserRoutes = require('./Routes/Users');
const ProjectRoutes = require('./Routes/Project');
// Routes Declaration end here

app.use(express.json());
app.use(cors());
dotenv.config();


// Routes usage start here
app.use('/Resemble_AI/User/', UserRoutes);
app.use('/Resemble_AI/Project/', ProjectRoutes);
// Routes usage start here

const port = process.env.PORT;


// Database Connectivity start here
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODB_URL)
    .then((res) => console.log(`Database Connected Successfully`))
    .catch((err) => console.log(`Database Not Connected`))


// Database Connectivity end here

app.listen(port, () => {
    console.log(`Your Server is running on ${port} port`)
})