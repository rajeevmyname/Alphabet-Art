const express = require('express');
const path = require('path'); // For path manipulation

const app = express();
const port = process.env.PORT || 3000;

// Middleware for logging requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Serve static files from "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Middleware for handling 404 errors
// app.use((req, res) => {
//   res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
// });

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});