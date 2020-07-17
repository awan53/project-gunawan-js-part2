const express = require('express');
const app = express();
app.get('/', (req, res) => res.json('APIs Works!'));
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running in PORT ${PORT}`));