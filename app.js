const dotenv = require('dotenv');
dotenv.config({ path: './config2.env' });
const express = require('express');
// const mongoose = require('mongoose');
const morgan = require('morgan');

const sampleDocument = require('./dev-files/sampleDocument.js');
// console.log(sampleDocument);
// const priceData = require('./models/priceData');

// const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
// console.log(DB);

// mongoose.set('strictQuery', false);
// mongoose.connect(DB).then(con => console.log('Database connection complete!'));

// const AppError = require('./utils/appError');
// const globalErrorHandler = require('./controllers/errorController');
// const tourRouter = require('./routes/tourRoutes');
// const userRouter = require('./routes/userRoutes');

const app = express();

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3) ROUTES
// app.use('/api/v1/tours', tourRouter);
// app.use('/api/v1/users', userRouter);

// app.all('*', (req, res, next) => {
//   next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
// });

// app.use(globalErrorHandler);

module.exports = app;
