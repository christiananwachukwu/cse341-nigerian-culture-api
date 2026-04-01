const request = require('supertest');
const mongoose = require('mongoose');
require('dotenv').config();

let app;

beforeAll(async () => {
  process.env.NODE_ENV = 'test';
  await mongoose.connect(process.env.MONGODB_URI);
  app = require('../server');
}, 30000);

afterAll(async () => {
  await mongoose.connection.close();
}, 30000);

describe('Dishes API - GET Routes', () => {

  // Test 1 - GET all dishes
  it('should return all dishes with status 200', async () => {
    const response = await request(app).get('/dishes');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  }, 30000);

  // Test 2 - GET single dish with invalid ID
  it('should return 500 for invalid dish ID format', async () => {
    const response = await request(app).get('/dishes/invalidid123');
    expect(response.status).toBe(500);
  }, 30000);

});