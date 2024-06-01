const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.get('/api/health', async (req, res) => {
    console.log(`Health check at ${new Date()}`);
    const response = await axios.get('http://app03-service.app-dev.svc.cluster.local:3000/api/health');
    res.send(response.data);
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});