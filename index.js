require('dotenv').config();
const url = process.env.MONGODB_URI;

const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cloudinary = require('cloudinary');
const Razorpay = require('razorpay');
const path = require('path'); // For path manipulation
const { Sticker, Workshop, Contest } = require('./dbmodels');

const app = express();
const port = process.env.PORT || 3002;
let art_url = "";
let art_description = "";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_TEST_API_KEY,
  key_secret: process.env.RAZORPAY_TEST_SECRET_KEY
});

async function handleArtUpload(file) {
  const res = await cloudinary.v2.uploader.upload(file, {
    folder: 'arts',
    resource_type: 'image'
  });
  return res;
}

async function handleProfileUpload(file) {
  const res = await cloudinary.v2.uploader.upload(file, {
    folder: 'profiles',
    resource_type: 'image'
  });
  return res;
}
const storage = new multer.memoryStorage();
const upload = multer({ storage });

// Middleware for logging requests
// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.url}`);
//   next();
// });

app.use(express.urlencoded({ extended: false }))
// Serve static files from "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.post('/submit-sticker', async (req, res) => {
  const sticker = new Sticker({ ...req.body });
  mongoose.connect(url)
    .then(result => {
      sticker.save().then(data => {
        mongoose.connection.close();
        // res.redirect(path.join('stickers', 'confirmation.html'));
      }).catch((error) => {
        res.send("Something went wrong", error);
      })
    })
    .catch(error => {
      console.log('error connecting to MongoDB:', error.message)
    })

  // res.send("Form submitted");

})

app.post('/submit-workshop', (req, res) => {
  const workshop = new Workshop({ ...req.body });
  mongoose.connect(url)
    .then(result => {
      workshop.save().then(data => {
        mongoose.connection.close();
        res.redirect(path.join('workshop', 'confirmation.html'));
      }).catch((error) => {
        res.send("Something went wrong", error);
      })
    })
    .catch(error => {
      console.log('error connecting to MongoDB:', error.message)
    })
})

app.post('/upload-art', upload.single('art'), async (req, res) => {
  res.redirect(path.join('contest', 'submit.html'));
  try {
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
    const cldRes = await handleArtUpload(dataURI);
    art_url = cldRes.secure_url;
    art_description = req.body.description;
  } catch (error) {
    console.log(error);
    res.send({
      message: error.message,
    });
  }
})

app.post('/submit-contest', upload.single('profile'), async (req, res) => {
  try {
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
    const cldRes = await handleProfileUpload(dataURI);
    const profile_url = cldRes.secure_url;
    const contest = new Contest({ ...req.body, profile_url, art_url, art_description });
    mongoose.connect(url)
      .then(result => {
        contest.save().then(data => {
          mongoose.connection.close();
          res.redirect(path.join('contest', 'confirmation.html'));
        }).catch((error) => {
          res.send("Something went wrong", error);
        })
      })
      .catch(error => {
        console.log('error connecting to MongoDB:', error.message)
      })

  } catch (error) {
    console.log(error);
    res.send({
      message: error.message,
    });
  }

})

// Middleware for handling 404 errors
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

