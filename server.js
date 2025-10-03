const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>Hello from Docker!</h1>
    <p>This is my first containerized app</p>
    <p>Server time: ${new Date().toLocaleString()}</p>
  `);
});

app.get('/about', (req, res) => {
  res.send('<h2>About Page</h2><p>This app runs in Docker!</p>');
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});