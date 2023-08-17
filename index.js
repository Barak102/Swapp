const express = require('express');
const app = express();
const pointsRouter = require("./routes/points");
const loggerMiddleware = require('./middlewares/logger-middleware');
const authenticationMiddleware = require('./middlewares/authentication-middleware');

app.use(express.json());

app.use('/points',loggerMiddleware, authenticationMiddleware, pointsRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

