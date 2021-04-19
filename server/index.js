const express = require('express'); 
const bodyParser = require('body-parser'); 
const mongoose = require('mongoose'); 
const cors = require('cors'); 

const app = express(); 
app.use(bodyParser.json({limit: "30mb", extended: true})); 
app.use(bodyParser.urlencoded({limit: "30mb", extended: true})); 
app.use(cors()); 
app.use("/posts", require('./routes/posts'));


const {CONN_URI} = require('./config/config'); 

const PORT = process.env.PORT || 5000; 

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
.catch((err) => console.log("Connection :" + err.message)); 

mongoose.set('useFindAndModify',false); 