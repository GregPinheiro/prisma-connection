const express = require('express');
const app = express();

const carrosRoutes = require('./routes/carros.routes');

app.get('/', (req, res) => {
  res.send('Hello word');
});

app.use('/carros', carrosRoutes);

app.listen(3000, () => console.log('Server running'));
