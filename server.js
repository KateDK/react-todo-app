const express = require('express');
const app = express();

app.use('/todos/', require('./routes/todosRoute'));

app.listen(8000, () => 'express server running on port 8000');
