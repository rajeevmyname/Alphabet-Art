require('dotenv').config();
const url = process.env.MONGODB_URI;

const express = require('express');
const mongoose = require('mongoose');
const path = require('path'); // For path manipulation
const {Sticker, Workshop, Contest} = require('./dbmodels');

const app = express();
const port = process.env.PORT || 3002;

// Middleware for logging requests
// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.url}`);
//   next();
// });
app.use(express.urlencoded({ extended: false }))
// Serve static files from "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.post('/submit-sticker',(req, res)=>{
  const sticker = new Sticker({...req.body});
  mongoose.connect(url)
    .then(result => {
      sticker.save().then(data => {
        mongoose.connection.close();
        res.redirect(path.join('stickers','confirmation.html'));
      }).catch((error)=>{
        res.send("Something went wrong", error);
      })
    })
    .catch(error => {
        console.log('error connecting to MongoDB:', error.message)
    })
  
  // res.send("Form submitted");
  
})

app.post('/submit-workshop',(req, res)=>{
  const workshop = new Workshop({...req.body});
  mongoose.connect(url)
    .then(result => {
      workshop.save().then(data => {
        mongoose.connection.close();
        res.redirect(path.join('workshop','confirmation.html'));
      }).catch((error)=>{
        res.send("Something went wrong", error);
      })
    })
    .catch(error => {
        console.log('error connecting to MongoDB:', error.message)
    })
})

app.post('/submit-contest',(req, res)=>{
  
  const contest = new Contest({...req.body});
  mongoose.connect(url)
    .then(result => {
      contest.save().then(data => {
        mongoose.connection.close();
        res.redirect(path.join('contest','confirmation.html'));
      }).catch((error)=>{
        res.send("Something went wrong", error);
      })
    })
    .catch(error => {
        console.log('error connecting to MongoDB:', error.message)
    })
})

// Middleware for handling 404 errors
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

