const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello Surya, Its final Pipeline has been created!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
