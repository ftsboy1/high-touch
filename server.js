const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const bodyParser = require('body-parser');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

let reports = []; // In-memory storage for reports

app.post('/submit-report', (req, res) => {
    const newReport = req.body;
    reports.push(newReport);
    io.emit('new report', newReport); // Emitting new report to all connected clients
    res.send('Report received');
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.emit('all reports', reports); // Send all reports to newly connected client
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin.html'));
  });
  