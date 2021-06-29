const dotenv = require('dotenv').config({path : '.env'})
const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const errorHandler = require('./middleware/error');
const path = require('path');
const multer = require('multer');

// Connecting To THe Database
connectDB();
// bring all the router
const project = require('./routers/project');
// Connect to the db
const app = express();
app.use(cors());    


app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// console.log(__dirname);

// app.use('/api/v1/project', project);
app.use('/api/v1/project', project);


// use error handling
app.use(errorHandler);

const port = 5000;
app.listen(port, (data,err)=>{
    console.log(`Server is connected on port ${port}`);
})