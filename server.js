require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET || 'secret',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Swagger docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use('/dishes', require('./routes/dishes'));
app.use('/festivals', require('./routes/festivals'));
app.use('/rulers', require('./routes/rulers'));
app.use('/folklore', require('./routes/folklore'));

// Home route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Nigerian Culture API! 🇳🇬' });
});

// Start server with DB connection
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    // ✅ Clean logs during tests
    if (process.env.NODE_ENV !== 'test') {
      console.log('Connected to MongoDB ✅');
    }

    if (process.env.NODE_ENV !== 'test') {
      app.listen(PORT, () => {
        console.log(`Server running on port ${PORT} 🚀`);
      });
    }
  } catch (err) {
    if (process.env.NODE_ENV !== 'test') {
      console.error('MongoDB connection error:', err);
    }
  }
};

startServer();

// Export app for testing
module.exports = app;