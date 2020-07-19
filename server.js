const express = require('express');
const app = express();
const connectDB = require('./config/db');
//memanggil connectDB
connectDB();
//initianl Middleware
app.use(express.json({ extended: false }));

//test route index
app.get('/', (req, res) => res.json('APIs Works!'));

//Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/post', require('./routes/api/post'));
app.use('/api/auth', require('./routes/api/auth'));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running in PORT ${PORT}`));