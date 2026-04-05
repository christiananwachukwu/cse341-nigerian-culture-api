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

describe('Folklore API - GET Routes', () => {

  // Test 1 - GET all folklore
  it('should return all folklore with status 200', async () => {
    const response = await request(app).get('/folklore');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  }, 30000);

  // Test 2 - GET single folklore with invalid ID
  it('should return 500 for invalid folklore ID format', async () => {
    const response = await request(app).get('/folklore/invalidid123');
    expect(response.status).toBe(500);
  }, 30000);

});