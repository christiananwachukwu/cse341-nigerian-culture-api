require('dotenv').config();
const mongoose = require('mongoose');

// Use your environment variables
const uri = process.env.MONGODB_URI;

async function testConnection() {
  try {
    // Connect to MongoDB (no extra options needed in Mongoose 7+)
    await mongoose.connect(uri);

    console.log('✅ Connected to MongoDB successfully');

    // Optional: list collections to verify access
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log('Collections in database:', collections.map(c => c.name));

    // Disconnect after test
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (err) {
    console.error('❌ MongoDB connection failed:', err.message);
  }
}

// Run the test
testConnection();