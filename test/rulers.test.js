const request = require("supertest");
const mongoose = require("mongoose");
require("dotenv").config();

let app;

beforeAll(async () => {
  process.env.NODE_ENV = "test";
  await mongoose.connect(process.env.MONGODB_URI);
  app = require("../server");
}, 30000);

afterAll(async () => {
  await mongoose.connection.close();
}, 30000);

describe("Rulers API - GET Routes", () => {
  // Test 1 - GET all rulers
  it("should return all rulers with status 200", async () => {
    const response = await request(app).get("/rulers");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  }, 30000);

  // Test 2 - GET single ruler with invalid ID
  it("should return 500 for invalid ruler ID format", async () => {
    const response = await request(app).get("/rulers/invalidid123");
    expect(response.status).toBe(500);
  }, 30000);
});
