const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Here is the first AWS Hands on training started. Make some change'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
