const express = require('express');
const axios = require('axios');
const schedule = require('node-schedule');
require('dotenv').config();

const app = express();

app.get('/api/health', async (req, res) => {
    console.log(`Health check at ${new Date()}`);
    res.status(200).send('OK');
});
const job = schedule.scheduleJob('*/1 * * * *', async () => {
    console.log(`Health check at ${new Date()}`);
    const response = await axios.get('http://app02-service.app-dev.svc.cluster.local:3000/api/health');
    console.info(`Chmando a API ${process.env.API_URL}`);
    console.log(response.data);
});

job.invoke();

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});