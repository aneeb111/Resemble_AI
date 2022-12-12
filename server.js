const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');

// Routes Declaration start here
    const UserRoutes = require('./Routes/Users');
// Routes Declaration end here

app.use(express.json());
app.use(cors());
dotenv.config();


// Routes usage start here
    app.use('/Resemble_AI/User/',UserRoutes);
// Routes usage start here

const port = process.env.PORT;


app.listen( port , ()=>{
    console.log(`Your Server is running on ${port} port`)
})