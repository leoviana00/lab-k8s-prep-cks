const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.get('/api/health', async (req, res) => {
    console.log(`Health check at ${new Date()}`);
    res.status(200).send('OK APP03');
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});