const mongoose = require('mongoose')
const pbSchema = require('./models/pb_schema')


let url = 'mongodb://127.0.0.1:27017/pb';

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("Connected to database")
    // Fetch
    pbschema.find({})
    .then((data)=>{
        console.log(data);
        mongoose.connection.close();
    })
    .catch((connectionError)=>{
        console.log(connectionError)
    })
})
.catch((connectionError)=>{
    console.log(connectionError);
})