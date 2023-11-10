const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse incoming requests
app.use(bodyParser.urlencoded({ extended: true }));

// Route for form submission
app.post('/submit-report', (req, res) => {
    console.log('Form submission received:');
    console.log('Room Number:', req.body['room-number']);
    console.log('Date:', req.body['current-date']);
    console.log('Time:', req.body['current-time']);
    console.log('Reporter:', req.body.reporter);
    console.log('Contact:', req.body.contact);
    console.log('Issues:', req.body.issue); // This will be an array if multiple checkboxes are selected
    console.log('Other Issues:', req.body['other-issues']);
    res.send('Report received');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
