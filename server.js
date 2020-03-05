const express = require('express');

const app = express();

app.get('/', (_, res) => {
    res.status(200).send('Hello world');
});

app.listen(3001);