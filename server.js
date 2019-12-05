const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

const app = express();
app.use(express.json());
const db = config.get('mongoURI');

// Connect to Mongo
mongoose.connect(db, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));


const data = require('./routes/api/data');
app.use('/api/data', data);

const path = require('path');
// Serve static assess while in production
if (process.env.NODE_ENV === 'production')
{   
    // sets the static folder, putting the index.html in client/build
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => `Server running on port ${PORT}`);