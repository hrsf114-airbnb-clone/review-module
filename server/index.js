const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));