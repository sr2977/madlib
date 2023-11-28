const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' folder
app.use(express.static('public'));

// GET route to serve the HTML form
app.get('madlib/ITC505/Lab7/public', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// POST route for handling form submission
app.post('madlib/ITC505/Lab7/public', (req, res) => {
  const { noun1, adjective1, verb1, noun2, adjective2 } = req.body;

  const madLib = `Once upon a time, a ${adjective1} ${noun1} decided to ${verb1} with a ${adjective2} ${noun2}.`;

  res.send(madLib);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
