const express = require('express');
const app = express();
const connectDB = require('./config/db');
//memanggil connectDB
connectDB();

app.get('/', (req, res) => res.json('APIs Works!'));
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running in PORT ${PORT}`));