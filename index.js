const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

const carrosRoutes = require('./routes/carros.routes');

app.get('/', (req, res) => {
  res.send('Hello word');
});

app.use('/carros', carrosRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
