const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongoose = require('mongoose');
const pbSchema = require('./models/pb_schema');

let url = 'mongodb://127.0.0.1:27017/pb';

app.get('/hello', (req, res) => {
    res.send('Hello World.');
});

app.get('/budget', (req, res) => {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('Connected to database');
            // Fetch data from MongoDB and send it as response
            pbSchema.find({})
                .then((data) => {
                    res.send(data);
                    mongoose.connection.close();
                })
                .catch((connectionError) => {
                    console.log(connectionError);
                });
        })
        .catch((connectionError) => {
            console.log(connectionError);
        });
});

// Define a route handler for the root path ("/")
app.use('/', express.static('public'));

app.post('/addNewBudget', (req, res) => {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            // Insert data into MongoDB
            let newData = new pbSchema(req.body);
            pbSchema.insertMany(newData)
                .then((data) => {
                    res.send('Data Entered Successfully');
                    mongoose.connection.close();
                })
                .catch((connectionError) => {
                    res.send(connectionError.message);
                });
        })
        .catch((connectionError) => {
            res.send(connectionError);
        });
});

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});
